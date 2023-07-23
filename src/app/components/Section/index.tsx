"use client";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { useRef } from "react";

export default function Section({
  title,
  image,
  children,
  isInvert = false,
  extraClassName = "",
}: any) {
  const sectionRef = useRef(null);
  const { show } = useIntersectionObserver(sectionRef);
  return (
    <section
      className={`section grid [&>article]:m-5 ${
        show ? "animate-fade-down" : "opacity-0"
      }  ${
        isInvert ? "flex-row-reverse" : ""
      } section-component ${extraClassName}`}
      ref={sectionRef}
    >
      <article className="section-component__article-img">
        <img src={image} alt={title} className="" width={400} height={370} loading="lazy" />
      </article>
      <article
        className={`section-component__article-content ${
          isInvert ? "reverse-column" : "reverse-column__small"
        }`}
      >
        <h3 className="title">{title}</h3>
        {children}
      </article>
    </section>
  );
}
