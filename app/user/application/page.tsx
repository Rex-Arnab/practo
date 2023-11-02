"use client";

import UserNavbar from "@/components/UserNavbar";
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
import { uploadFile } from "@/lib/fileUploader";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRef, useState } from "react";

function ApplicationForm() {
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [blood_group, setBlood_group] = useState("");
  const [nearest_hospital, setNearest_hospital] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [acknowledgement, setAcknowledgement] = useState(false);
  const [file, setFile] = useState(null);
  const { toast } = useToast();
  const uploadRef = useRef<any>(null);

  const handleSignup = async () => {
    setLoading(true);

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
      !district
    ) {
      toast({
        title: "Missing Fields",
        description: "Please Fill All The Fields",
        variant: "primary"
      });
      return;
    }
    if (!file) {
      toast({
        title: "Missing File",
        description: "Please Upload Your Medical Report",
        variant: "primary"
      });
      return;
    }

    const reportUrl = await uploadFile(file, `application/${email}`);

    axios
      .post("/api/admin/applications/create", {
        name,
        email,
        phone_number,
        age,
        blood_group,
        nearest_hospital,
        reportUrl,
        district,
        state
      })
      .then((res) => {
        toast({
          title: "Application Saved",
          description: "Thank You For Submititng Your Application",
          variant: "primary"
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section className="min-h-screen bg-slate-200">
      <UserNavbar />
      <main className="p-5 md:p-5 max-w-4xl mx-auto space-y-5">
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

            <input
              type="file"
              onChange={(e: any) => {
                setFile(e.target.files[0]);
              }}
              className="hidden"
              ref={uploadRef}
            />

            <Button
              className="w-full"
              onClick={() => uploadRef.current.click()}>
              Upload Blood Requisit form
            </Button>
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
              I am in Medical Emergency
            </label>
          </div>

          <Button
            className="w-full transition duration-200 ease-in-out"
            onClick={handleSignup}
            disabled={!acknowledgement || !file || loading}>
            {loading ? <Loader className="h-4 w-4 animate-spin" /> : "Register"}
          </Button>
        </div>
      </main>
    </section>
  );
}

export default ApplicationForm;
