"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Email dan password wajib diisi");
      return;
    }

    if (email === "admin@gmail.com" && password === "123") {
      alert("Login berhasil ✅");

      localStorage.setItem("isLogin", "true");

      router.push("/");
    } else {
      setError("Email atau password salah ❌");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-80">
        <h1 className="text-xl font-bold mb-4 text-center">Login</h1>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 p-2 w-full mb-3 rounded text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-400 p-2 w-full mb-4 rounded text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button
          type="button"
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Login
        </button>

        {/* INFO LOGIN */}
        <p className="text-xs text-gray-500 mt-3 text-center">
          Gunakan: admin@gmail.com / 123
        </p>
      </div>
    </div>
  );
}