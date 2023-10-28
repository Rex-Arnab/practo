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
    <Card className="w-full sm:w-[250px] rounded-xl shadow">
      {image && (
        <div
          className={cn(
            "relative h-[200px] w-full border-b border-black/20",
            color
          )}>
          <Image
            src={image}
            fill
            alt={title}
            className="max-w-[200px] mx-auto"
          />
        </div>
      )}
      {Icon && (
        <div
          className={cn(
            "h-[200px] w-full border-b border-black/20 flex items-center justify-center",
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
      <main className="flex items-stretch gap-5 flex-wrap">
        <OfferCard
          title="Blood Donor"
          description="Direct Connect to Donor"
          image="/instant_video_consulation.webp"
          color="bg-purple-200"
        />
        <OfferCard
          title="Doctor's Appointment"
          image="/nurse.webp"
          color="bg-blue-300"
        />
        <OfferCard
          title="Medicines"
          image="/surgeries.webp"
          color="bg-green-300"
        />
        <OfferCard
          title="Lab test"
          image="/blood_donor.png"
          color="bg-orange-200"
        />
        <OfferCard
          title="Ambulance Services"
          icon={Siren}
          color="bg-purple-300"
          textColor="text-purple-900"
        />
      </main>
    </section>
  );
}

export default Offering;
