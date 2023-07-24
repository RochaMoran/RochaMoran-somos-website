'use client';
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import React, { useRef } from "react";

export default function Covid() {
  const covidRef = useRef(null);
  const { show } = useIntersectionObserver(covidRef);
  return (
    <section className={`covid-section ${show ? "animate-flip-up duration-1000" : "opacity-0"}`}  ref={covidRef}>
      <img
        alt="Dr. Ramon Tallaj"
        src="/images/covid.svg"
        width={200}
        height={200}
        className="covid-img"
        loading="lazy"
      />
      <article className="covid">
        <div className="covid-content animated">
          <h4 className="font-bold health-content__title">
            LEADING THROUGH <br /> COVID-19
          </h4>
          <h6>
            LESSONS LEARNED FROM A <br /> ONCE IN A LIFE TIME PANDEMIC
          </h6>
          <p className="health-content__content">
            In March 2020, in the earliest days of the COVID-19 pandemic and at
            the direct request of then-Governor Andrew Cuomo to SOMOS Founder
            and Chairman, Dr. Ramon Tallaj, SOMOS network providers became the
            first health network organization to respond to the dire threat and
            rise to the severe consequences to come.
          </p>
          <a href="" className="btn-covid">
            READ MORE
          </a>
        </div>
      </article>
    </section>
  );
}
