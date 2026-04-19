DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;
-- Without any policy, only service_role (via Edge Function) can write/read.