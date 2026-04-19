import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  position?: string;
  comment?: string;
  source?: string;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const sendTelegram = async (lead: LeadPayload) => {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const TELEGRAM_API_KEY = Deno.env.get("TELEGRAM_API_KEY");
  const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");
  if (!LOVABLE_API_KEY || !TELEGRAM_API_KEY || !TELEGRAM_CHAT_ID) {
    console.warn("Telegram secrets not fully configured, skipping");
    return { ok: false, reason: "missing_secrets" };
  }

  const lines = [
    `<b>🔥 Новая заявка с сайта</b>`,
    ``,
    `<b>Имя:</b> ${escapeHtml(lead.name)}`,
    `<b>Телефон:</b> ${escapeHtml(lead.phone)}`,
    lead.email ? `<b>Email:</b> ${escapeHtml(lead.email)}` : "",
    lead.company ? `<b>Компания:</b> ${escapeHtml(lead.company)}` : "",
    lead.position ? `<b>Должность:</b> ${escapeHtml(lead.position)}` : "",
    lead.comment ? `\n<b>Комментарий:</b>\n${escapeHtml(lead.comment)}` : "",
    ``,
    `<i>Источник: ${escapeHtml(lead.source || "website")}</i>`,
  ].filter(Boolean).join("\n");

  const res = await fetch("https://connector-gateway.lovable.dev/telegram/sendMessage", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": TELEGRAM_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: lines,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    console.error("Telegram send failed", res.status, data);
    return { ok: false, reason: `telegram_${res.status}` };
  }
  return { ok: true };
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = (await req.json()) as LeadPayload;

    // basic validation
    if (!body?.name?.trim() || !body?.phone?.trim()) {
      return new Response(JSON.stringify({ error: "name and phone are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (body.name.length > 200 || body.phone.length > 50) {
      return new Response(JSON.stringify({ error: "fields too long" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: inserted, error: insertErr } = await supabase
      .from("leads")
      .insert({
        name: body.name.trim(),
        phone: body.phone.trim(),
        email: body.email?.trim() || null,
        company: body.company?.trim() || null,
        position: body.position?.trim() || null,
        comment: body.comment?.trim() || null,
        source: body.source?.trim() || "website",
      })
      .select()
      .single();

    if (insertErr) {
      console.error("DB insert failed", insertErr);
      return new Response(JSON.stringify({ error: "db_error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Fire telegram (don't fail the request if telegram fails)
    const tg = await sendTelegram(body);

    return new Response(JSON.stringify({ ok: true, id: inserted.id, telegram: tg }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("submit-lead error", e);
    return new Response(JSON.stringify({ error: "internal" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
