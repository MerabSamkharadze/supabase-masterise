"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { first_name: name, age: parseInt(age) },
        },
      });

      if (error) {
        setError(error.message);
      } else {
        setMessage(
          "Sign up successful! Check your email to verify your account."
        );
      }
    } catch (error) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 text-black bg-gray-100 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {message && <p className="text-green-500 mb-2">{message}</p>}
      <button
        onClick={handleSignUp}
        disabled={loading}
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </div>
  );
};

export default SignUp;
