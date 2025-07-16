"use client";

import Image from "next/image";
import { Idea } from "@/types";
import { useState } from "react";

interface CardProps {
  idea: Idea;
}

export default function Card({ idea }: CardProps) {
  const formattedDate = new Date(idea.published_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [imgSrc, setImgSrc] = useState(
    idea.small_image[0]?.url || "/logo2.png"
  );

  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="aspect-w-4 aspect-h-3 w-full relative">
        <Image
          src={imgSrc}
          alt={idea.title}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          onError={() => setImgSrc("/loading1.png")}
        />
      </div>
      <div className="flex flex-grow flex-col p-4">
        <p className="text-sm text-gray-500">{formattedDate}</p>
        <h3 className="mt-2 font-bold text-lg ellipsis-container">
          {idea.title}
        </h3>
      </div>
    </div>
  );
}