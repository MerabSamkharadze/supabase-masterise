import { supabase } from "@/lib/supabase";

export const signUp = async (email: string, password: string) => {
  try {
    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) throw error;
    return { user };
  } catch (error) {
    console.error("Error during signup:", error);
    return { error };
  }
};
