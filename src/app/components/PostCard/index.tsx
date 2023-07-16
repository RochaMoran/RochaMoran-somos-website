"use client";
import Image from "next/image";
import { BiSolidUser } from "react-icons/bi";
import { BsCalendarWeekFill } from "react-icons/bs";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { useRef } from "react";

export default function PostCard({ data }: any) {
  const { img, icon, title, description, author, date } = data;
  const postRef = useRef(null);
  const { show } = useIntersectionObserver(postRef)
  return (
    <div className={`animated project ${show ? 'animate-fade-up' : 'opacity-0'}`} ref={postRef}>
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
