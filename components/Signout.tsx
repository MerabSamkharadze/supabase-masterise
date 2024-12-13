"use client";

import { useEffect } from "react";

const SignOut = () => {
  useEffect(() => {
    const signOut = async () => {
      await fetch("/api/auth/signout", {
        method: "POST",
      });
      window.location.href = "/";
    };
    signOut();
  }, []);

  return <p>Logging out...</p>;
};

export default SignOut;
