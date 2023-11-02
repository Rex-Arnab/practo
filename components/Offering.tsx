"use client";

import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { Siren } from "lucide-react";

interface OfferCardProps {
  title: string;
  description?: string;
  image?: string;
  icon?: any;
  color: string;
  textColor?: string;
}

const OfferCard = ({
  title,
  description,
  image,
  icon: Icon,
  color,
  textColor
}: OfferCardProps) => {
  return (
    <Card className="rounded-xl shadow flex flex-col w-full">
      {image && (
        <div
          className={cn(
            "relative h-[200px] w-full border-b border-black/20",
            color
          )}>
          <Image src={image} fill alt={title} className="mx-auto" />
        </div>
      )}
      {Icon && (
        <div
          className={cn(
            "h-[200px] max-w-52 border-b border-black/20 flex items-center justify-center",
            color
          )}>
          <Icon size={150} className={textColor} />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
    </Card>
  );
};

function Offering() {
  return (
    <section>
      <h1 className="text-3xl font-bold my-5 text-gray-800">Our Offering</h1>
      <main className="flex flex-col flex-wrap items-stretch gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <OfferCard
            title="Blood Donor"
            description="Direct Connect to Donor"
            image="/instant_video_consulation.jpg"
            color="bg-purple-200"
          />
          <OfferCard
            title="Doctor's Appointment"
            image="/doctors-appointment.jpg"
            color="bg-blue-300"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <OfferCard
            title="Medicines"
            image="/Medicines.jpeg"
            color="bg-green-300"
          />
          <OfferCard
            title="Lab test"
            image="/lab_test.jpeg"
            color="bg-orange-200"
          />
          <OfferCard
            title="Ambulance Services"
            image="/ambulance-service.jpg"
            color="bg-purple-300"
            textColor="text-purple-900"
          />
        </div>
      </main>
    </section>
  );
}

export default Offering;
