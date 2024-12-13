import { useState, useEffect } from "react";
import { getAccessToken } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

const useUser = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = getAccessToken();
      if (token) {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
          console.error(error);
        } else {
          setUser(data.user);
        }
      }
    };

    fetchUser();
  }, []);

  return user;
};

export default useUser;
