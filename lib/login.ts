import { supabase } from "./supabase";
import { setAccessToken, setRefreshToken } from "./auth";

export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  // Access Token და Refresh Token-ის შენახვა Cookies-ში
  if (data?.session?.access_token) {
    setAccessToken(data.session.access_token);
    setRefreshToken(data.session.refresh_token);
  }

  return data.user;
};
