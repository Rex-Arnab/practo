"use client";
import AdminNavbar from "@/components/AdminNavbar";
import ApplicationCard from "@/components/ApplicationCard";
import { ApplicationType } from "@/types/ApplicationType";
import axios from "axios";
import { useEffect, useState } from "react";

function Application() {
  const [applications, setApplications] = useState<ApplicationType[]>([]);

  useEffect(() => {
    axios
      .get("/api/admin/applications")
      .then((res) => {
        setApplications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteApplication = (id: string) => {
    setApplications(applications.filter((app) => app._id !== id));
    axios.delete(`/api/admin/applications/${id}`).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className="">
      <AdminNavbar />
      <main className="p-5 grid grid-cols-1 md:grid-cols-4 gap-5">
        {applications.length > 0 &&
          applications.map((application: ApplicationType) => (
            <ApplicationCard
              key={application._id}
              id={application._id}
              name={application.name}
              email={application.email}
              blood_group={application.blood_group}
              phone_number={application.phone_number}
              deleteApplication={deleteApplication}
            />
          ))}
      </main>
    </div>
  );
}

export default Application;
