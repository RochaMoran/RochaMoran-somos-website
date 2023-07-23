'use client';
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import Image from "next/image";
import React, { useRef } from "react";

export default function Testimonial() {
  const testimonialRef = useRef(null);
  const { show } = useIntersectionObserver(testimonialRef);

  return (
    <section className={`section testimonials ${show ? "animate-fade-down" : "opacity-0"}`}  ref={testimonialRef}>
      <article>
        <div className="testimonials-starts">
          <div className="testimonial-star"></div>
          <div className="testimonial-star"></div>
          <div className="testimonial-star"></div>
          <div className="testimonial-star"></div>
          <div className="testimonial-star"></div>
        </div>
        <q>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos
          exercitationem veritatis libero at placeat error vel, accusantium
          consequatur, qui possimus eius cupiditate! Nam vel deleniti quibusdam
          aspernatur modi exercitationem?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos
          exercitationem veritatis libero at placeat error vel, accusantium
          consequatur, qui possimus eius cupiditate! Nam vel deleniti quibusdam
          aspernatur modi exercitationem?
        </q>
        <span>- Don Ramón Valdez</span>
      </article>
      <figure>
        <Image
          src="/images/testimonial.png"
          width={400}
          height={400}
          alt="Testimonial"
        />
      </figure>
    </section>
  );
}
