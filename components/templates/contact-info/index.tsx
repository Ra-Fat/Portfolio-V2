import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ContactData } from "@/data";
import Image from "next/image";

export const ContactInfo = () => (
  <div className="w-full lg:flex-1 flex flex-col gap-4 h-full">
    {ContactData.map(({ src, label, username, href }) => {
      const content = (
        <Card
          key={label}
          className="backdrop-blur-md  card flex flex-row items-center p-6 bg-card"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shrink-0">
            <Image alt={label} src={src} width={30} height={30} />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white">{label}</span>
            <span className="text-sm text-muted-foreground">{username}</span>
          </div>
        </Card>
      );

      return href ? (
        <a key={label} href={href} className="block">
          {content}
        </a>
      ) : (
        content
      );
    })}
  </div>
);
