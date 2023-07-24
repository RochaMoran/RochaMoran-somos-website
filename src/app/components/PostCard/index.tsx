"use client";
import { BiSolidUser } from "react-icons/bi";
import { BsCalendarWeekFill } from "react-icons/bs";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { useRef } from "react";

export default function PostCard({ data }: any) {
  const { img, title, description, author, date } = data;
  const postRef = useRef(null);
  const { show } = useIntersectionObserver(postRef)
  return (
    <div className={`animated project ${show ? 'animate-fade-up duration-1000' : 'opacity-0'}`} ref={postRef}>
      <img src={img} className="project-image" alt={title} loading="lazy" />
      <div className={`project-info`}>
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
