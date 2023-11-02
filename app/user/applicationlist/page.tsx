"use client";

import UserNav from "@/components/UserNavbar";
import axios from "axios";
import { useEffect, useState } from "react";

function ApplicationList() {
  const [applications, setApplications] = useState([]);

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
  return (
    <div className="bg-slate-200 min-h-screen">
      <UserNav />
      <main className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {applications.length > 0 &&
            applications.map((application: any) => (
              <div
                key={application._id}
                className="bg-white shadow rounded p-5">
                <div className="text-xl font-bold">{application.name}</div>
                <div className="text-lg">{application.email}</div>
                <div className="text-lg">{application.phone_number}</div>
                <div className="text-lg">{application.blood_group}</div>
                <div className="text-lg">{application.age}</div>
                <div className="text-lg">{application.nearest_hospital}</div>
                <div className="text-lg">{application.district}</div>
                <div className="text-lg">{application.state}</div>
                {application.reportUrl && (
                  <img src={application.reportUrl} alt="report" />
                )}
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default ApplicationList;
