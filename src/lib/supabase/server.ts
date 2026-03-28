import { createClient } from "@supabase/supabase-js";

export const createServerClient = () => {
  const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseUrl = envUrl.startsWith("http") ? envUrl : "https://placeholder.supabase.co";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder_key";
  
  return createClient(supabaseUrl, supabaseAnonKey);
};

// Use this only for secure backend operations that need to bypass RLS policies
export const createAdminClient = () => {
  const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseUrl = envUrl.startsWith("http") ? envUrl : "https://placeholder.supabase.co";
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder_key";
  
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};
