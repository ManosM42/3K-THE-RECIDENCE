import { supabase } from "@/integrations/supabase/client";

const LAST_PING_KEY = "sb_last_ping";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export async function keepAlive() {
  try {
    const last = localStorage.getItem(LAST_PING_KEY);
    if (last && Date.now() - Number(last) < ONE_DAY_MS) return;

    await supabase.from("pricing").select("id").limit(1);
    localStorage.setItem(LAST_PING_KEY, String(Date.now()));
  } catch {
    // fail silently
  }
}