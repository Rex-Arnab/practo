"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import { useState } from "react";

function LoginPage() {
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [blood_group, setBlood_group] = useState("");
  const [nearest_hospital, setNearest_hospital] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [acknowledgement, setAcknowledgement] = useState(false);
  const { toast } = useToast();

  const handleSignup = async () => {
    setLoading(true);
    if (password !== confirm_password) {
      toast({
        title: "Password Mismatch",
        description: "Please Check Your Password",
        variant: "primary"
      });
      setLoading(false);
      return;
    }
    if (!acknowledgement) {
      toast({
        title: "Acknowledgement Required",
        description: "Please Check The Acknowledgement",
        variant: "primary"
      });
      setLoading(false);
      return;
    }
    if (
      !name ||
      !email ||
      !blood_group ||
      !phone_number ||
      !age ||
      !nearest_hospital ||
      !state ||
      !district ||
      !password
    ) {
      toast({
        title: "Missing Fields",
        description: "Please Fill All The Fields",
        variant: "primary"
      });
      setLoading(false);
      return;
    }

    setTimeout(() => {
      toast({
        title: "Application Saved",
        description: "Thank You For Registering",
        variant: "primary"
      });
      setLoading(false);
    }, 2000);
  };
  return (
    <section className="min-h-screen bg-slate-200">
      <Navbar />
      <main className="p-2 md:p-5 max-w-4xl mx-auto space-y-5">
        <h1 className="text-2xl font-bold mt-5">Register Your Application</h1>
        <div className="p-2 md:p-5 bg-white rounded shadow space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              placeholder="Enter Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              placeholder="Enter Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <Input
              placeholder="Enter Your Phone Number"
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
            />

            <Select
              onValueChange={(value) => {
                setBlood_group(value);
              }}>
              <SelectTrigger>
                <SelectValue
                  placeholder="Select Blood Group"
                  className=" placeholder:text-muted-foreground"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ap">A+</SelectItem>
                <SelectItem value="an">A-</SelectItem>
                <SelectItem value="bp">B+</SelectItem>
                <SelectItem value="bn">B-</SelectItem>
                <SelectItem value="abp">AB+</SelectItem>
                <SelectItem value="abn">AB-</SelectItem>
                <SelectItem value="op">O+</SelectItem>
                <SelectItem value="on">O-</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Enter Your Nearest Govt Hospital"
              value={nearest_hospital}
              onChange={(e) => setNearest_hospital(e.target.value)}
            />

            <Input
              placeholder="Enter Your State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />

            <Input
              placeholder="Enter Your District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />

            <Input
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input
              placeholder="Confirm Your Password"
              value={confirm_password}
              onChange={(e) => setConfirm_password(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="acknowledgement"
              checked={acknowledgement}
              onClick={() => setAcknowledgement(!acknowledgement)}
              disabled={loading}
            />
            <label
              htmlFor="acknowledgement"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Clicking by Knowing that I am in Medical Emergency
            </label>
          </div>

          <Button
            className="w-full transition duration-200 ease-in-out"
            onClick={handleSignup}
            disabled={!acknowledgement}>
            {loading ? <Loader className="h-4 w-4 animate-spin" /> : "Register"}
          </Button>
        </div>
      </main>
    </section>
  );
}

export default LoginPage;
