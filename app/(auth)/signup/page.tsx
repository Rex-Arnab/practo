"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { Eye, EyeOff, Loader } from "lucide-react";
import { useState } from "react";

function LoginPage() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleCPassword, setToggleCPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSignup = async () => {
    setLoading(true);

    if (!firstname || !lastname || !email || !phone_number) {
      toast({
        title: "Missing Fields",
        description: "Please Fill All The Fields",
        variant: "primary"
      });
    } else if (password !== confirm_password) {
      toast({
        title: "Password Mismatch",
        description: "Please Check Your Password",
        variant: "destructive"
      });
    }

    axios
      .post("/api/register", {
        email,
        password,
        firstname,
        lastname,
        phone: phone_number
      })
      .then((res: any) => {
        toast({
          title: "Registration Successful",
          description: "Thank You For Registering,You Can Now Login",
          variant: "primary"
        });
      })
      .catch((err: any) => {
        toast({
          title: "Registration Failed",
          description: "Please Check Your Details",
          variant: "destructive"
        });
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section className="min-h-screen bg-slate-200">
      <Navbar />
      <main className="p-5 md:p-5 max-w-4xl mx-auto space-y-5">
        <h1 className="text-2xl font-bold mt-5">Register Your Account</h1>
        <div className="p-2 md:p-5 bg-white rounded shadow space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              placeholder="Enter Your First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <Input
              placeholder="Enter Your Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />

            <Input
              placeholder="Enter Your Phone Number"
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
            />

            <Input
              placeholder="Enter Your Email"
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

            <div className="flex items-center justify-between mr-2">
              <Input
                placeholder="Confirm password"
                type={togglePassword ? "text" : "password"}
                value={confirm_password}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mr-2"
              />
              {toggleCPassword ? (
                <Eye
                  className="h-5 w-5 cursor-pointer select-none"
                  onClick={() => setToggleCPassword(false)}
                />
              ) : (
                <EyeOff
                  className="h-5 w-5 cursor-pointer select-none"
                  onClick={() => setToggleCPassword(true)}
                />
              )}
            </div>
          </div>

          <Button
            className="w-full transition duration-200 ease-in-out"
            onClick={handleSignup}
            disabled={password !== confirm_password || loading}>
            {loading ? <Loader className="h-4 w-4 animate-spin" /> : "Register"}
          </Button>
          <p className="text-center">
            Already Have An Account?{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
        </div>
      </main>
    </section>
  );
}

export default LoginPage;
