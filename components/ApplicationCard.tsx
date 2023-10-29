"use client";

import { Button } from "./ui/button";

interface ApplicationCardProps {
  id: string;
  name: string;
  email: string;
  blood_group: string;
  phone_number: string;
  deleteApplication: (id: string) => void;
}

function ApplicationCard({
  id,
  name,
  email,
  blood_group,
  phone_number,
  deleteApplication
}: ApplicationCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <div>
        <h1 className="text-xl uppercase font-bold">By : {name}</h1>
        <h1>{email}</h1>
        <h1>{blood_group}</h1>
        <h1>{phone_number}</h1>
      </div>
      <div className="mt-4 flex gap-4">
        <Button className="w-full">View</Button>
        <Button
          className="w-full"
          variant="destructive"
          onClick={() => deleteApplication(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ApplicationCard;
