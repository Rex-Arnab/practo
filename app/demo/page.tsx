"use client";

import { Button } from "@/components/ui/button";
import { uploadFile } from "@/lib/fileUploader";
import { useState } from "react";

function Test() {
  const [file, setFile] = useState(null);
  const handleUpload = async () => {
    if (!file) return;
    console.log("Uploading...");
    const url = await uploadFile(file, "test");
    console.log(url);
    console.log("Uploaded");
  };

  return (
    <div>
      <h1>Demo Uploader</h1>
      <input
        type="file"
        onChange={(e: any) => {
          setFile(e.target.files[0]);
          console.log(e.target.files[0]);
        }}
      />
      <Button onClick={handleUpload}>Upload</Button>
      <Button onClick={() => console.log(file)}>Check</Button>
    </div>
  );
}

export default Test;
