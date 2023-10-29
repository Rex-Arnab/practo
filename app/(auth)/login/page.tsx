"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Loader } from "lucide-react";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [togglePassword, setTogglePassword] = useState(false);

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
            placeholder="Enter Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex items-center justify-between mr-2">
            <Input
              placeholder="Enter Your password"
              type={togglePassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mr-2"
            />
            {togglePassword ? (
              <Eye
                className="h-5 w-5 cursor-pointer select-none"
                onClick={() => setTogglePassword(false)}
              />
            ) : (
              <EyeOff
                className="h-5 w-5 cursor-pointer select-none"
                onClick={() => setTogglePassword(true)}
              />
            )}
          </div>

          <Button className="w-full" onClick={handleLogin}>
            {loading ? <Loader className="h-4 w-4 animate-spin" /> : "Login"}
          </Button>
        </div>
      </main>
    </section>
  );
}

export default LoginPage;
