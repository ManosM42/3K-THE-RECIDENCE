import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';
 
const SUPABASE_URL = "https://uzqxccermpaqtxiwusiv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6cXhjY2VybXBhcXR4aXd1c2l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3MDA2MjAsImV4cCI6MjA5NDI3NjYyMH0.RxTX2oJ7ZlWsBlN-x2_MrOiLhKY-D-jK-XNq91-N82Y";
 
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: typeof window !== 'undefined' ? localStorage : undefined,
    persistSession: true,
    autoRefreshToken: true,
  }
});
 