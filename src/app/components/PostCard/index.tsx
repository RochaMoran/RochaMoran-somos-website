"use client";
import Image from "next/image";
import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsCalendarWeekFill } from "react-icons/bs";

export default function PostCard({ data }: any) {
  const { img, icon, title, description, author, date } = data;
  return (
    <div className="animated project">
      <Image src={img} className="project-image" alt={title} />
      <div className={`project-info`}>
        <Image src={icon} className="inline-block project-icon" alt={title} />
        <h6 className="inline-block project-title">{title}</h6>
        <p>{description}</p>
        <footer className="flex justify-between project-footer text-[11px] [&>span]:font-bold [&>span]:flex [&>span]:justify-center [&>span]:items-center mt-6">
          <span>
            <BiSolidUser className="mr-1" />
            {author}
          </span>
          <span>
            <BsCalendarWeekFill className="mr-1" />
            {date}
          </span>
        </footer>
      </div>
    </div>
  );
}
