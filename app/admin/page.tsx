"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AdminPanelLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async () => {
    setLoading(true);
    axios
      .post("/api/admin/login", { email, password })
      .then((res) => {
        router.push("/admin/dashboard");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section className="max-w-xl mx-auto p-5">
      <header className="mb-5">
        <h1 className="text-xl md:text-2xl font-bold">Admin Panel</h1>
        <p className="text-sm md:text-base text-gray-500">
          Login into your account
        </p>
      </header>
      <main className="bg-white p-5 shadow-md rounded-md space-y-5">
        <Input
          placeholder="Enter your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Enter your Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <Loader className="animate-spin" size={16} color="white" />
          ) : (
            "Login"
          )}
        </Button>
      </main>
    </section>
  );
}

export default AdminPanelLogin;
