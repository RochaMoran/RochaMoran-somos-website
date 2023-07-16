'use client';
import Image from "next/image";
import React from "react";

export default function PostCard({ title, icon, img, description }: any) {
  return (
    <div className="animated project">
      <Image src={img} className="project-image" alt={title} />
      <div className={`project-info`}>
        <Image src={icon} className="inline-block project-icon" alt={title} />
        <h6 className="inline-block project-title">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
}
