"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Login Failed",
        description: "Incorrect Email or Password",
        variant: "primary"
      });
      setLoading(false);
    }, 2000);
  };
  return (
    <section className="min-h-screen bg-slate-200">
      <Navbar />
      <main className="p-5 grid place-content-center space-y-5">
        <h1 className="text-2xl font-bold mt-10">Login To Your Account</h1>
        <div className="p-5 bg-white rounded shadow space-y-5">
          <Input
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="w-full" onClick={handleLogin}>
            {loading ? <Loader className="h-4 w-4 animate-spin" /> : "Login"}
          </Button>
        </div>
      </main>
    </section>
  );
}

export default LoginPage;
