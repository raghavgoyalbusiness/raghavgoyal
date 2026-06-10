
-- Lock down email queue helper functions: set search_path and restrict execute to service_role only.
DO $$
DECLARE fn record;
BEGIN
  FOR fn IN
    SELECT p.oid::regprocedure AS sig
    FROM pg_proc p JOIN pg_namespace n ON p.pronamespace=n.oid
    WHERE n.nspname='public'
      AND p.proname IN ('delete_email','enqueue_email','move_to_dlq','read_email_batch')
  LOOP
    EXECUTE format('ALTER FUNCTION %s SET search_path = pgmq, public, pg_temp', fn.sig);
    EXECUTE format('REVOKE EXECUTE ON FUNCTION %s FROM PUBLIC, anon, authenticated', fn.sig);
    EXECUTE format('GRANT EXECUTE ON FUNCTION %s TO service_role', fn.sig);
  END LOOP;
END $$;
