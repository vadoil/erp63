# Деплой ltbox.ru на VPS (159.194.222.73)

## 1. Подготовка сервера (один раз)

Зайдите на VPS под root или через sudo.

### Создать пользователя для деплоя
```bash
adduser --disabled-password --gecos "" deploy
mkdir -p /home/deploy/.ssh
chmod 700 /home/deploy/.ssh
touch /home/deploy/.ssh/authorized_keys
chmod 600 /home/deploy/.ssh/authorized_keys
chown -R deploy:deploy /home/deploy/.ssh
```

### Сгенерировать SSH-ключ для GitHub Actions
На локальной машине (или прямо на VPS):
```bash
ssh-keygen -t ed25519 -C "github-actions-ltbox" -f ~/ltbox_deploy_key -N ""
```
- Содержимое **`ltbox_deploy_key.pub`** добавьте в `/home/deploy/.ssh/authorized_keys` на VPS.
- Содержимое **`ltbox_deploy_key`** (приватный) понадобится для GitHub Secret `VPS_SSH_KEY`.

### Создать каталог сайта
```bash
mkdir -p /var/www/ltbox.ru
chown -R deploy:www-data /var/www/ltbox.ru
chmod -R 775 /var/www/ltbox.ru
```

### Настроить Nginx
```bash
# Скопировать конфиг из репо
cp deploy/nginx-ltbox.ru.conf /etc/nginx/sites-available/ltbox.ru
ln -s /etc/nginx/sites-available/ltbox.ru /etc/nginx/sites-enabled/

# Каталог для acme-challenge
mkdir -p /var/www/certbot

# Проверка конфига (HTTPS блок выдаст ошибку, пока нет сертификата —
# временно закомментируйте серверы 443, выпустите сертификат, потом раскомментируйте)
nginx -t
systemctl reload nginx
```

### Получить SSL-сертификат (Let's Encrypt)
```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d ltbox.ru -d www.ltbox.ru
# Автообновление уже настроено через systemd timer
```

## 2. DNS

В панели регистратора домена ltbox.ru:
- Удалить текущую A-запись `@` → 185.158.133.1 (Lovable)
- Добавить:
  - `A  @    159.194.222.73`
  - `A  www  159.194.222.73`
- Записи для отправки писем (`notify.ltbox.ru`, MX, SPF, DKIM, DMARC) **не трогать**.

Подождать 5–60 минут, проверить: `dig ltbox.ru +short` → должно вернуть `159.194.222.73`.

## 3. Секреты в GitHub

Repo → Settings → Secrets and variables → Actions → New repository secret. Добавить:

| Имя | Значение |
|---|---|
| `VPS_HOST` | `159.194.222.73` |
| `VPS_USER` | `deploy` |
| `VPS_PORT` | `22` (или ваш) |
| `VPS_PATH` | `/var/www/ltbox.ru/` |
| `VPS_SSH_KEY` | содержимое приватного ключа `ltbox_deploy_key` целиком |
| `VITE_SUPABASE_URL` | `https://bnrvlbufkodtawchbkuq.supabase.co` |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | (значение из `.env`) |
| `VITE_SUPABASE_PROJECT_ID` | `bnrvlbufkodtawchbkuq` |

## 4. Запуск

Любой push в `main` → автоматический билд и деплой.
Можно вручную: Actions → "Deploy to VPS" → Run workflow.

## 5. Что важно понимать

- **Backend остаётся на Lovable Cloud** (Supabase). Edge-функции `submit-lead`, `process-email-queue`, база, авторизация — всё работает по API. Переносить ничего не нужно.
- **Lovable перестанет обслуживать ltbox.ru**, как только DNS уйдёт с 185.158.133.1. Это нормально — сайт теперь у вас.
- **Превью в редакторе Lovable продолжает работать** (`*.lovable.app`) — можно править проект как раньше, изменения через GitHub доедут до VPS автоматически.
- Если позже захотите вернуться на хостинг Lovable — просто верните A-запись на 185.158.133.1.
