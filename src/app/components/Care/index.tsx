'use client';
import { careData } from "@/app/data/care";
import CareItem from "../CareItem";
import { useRef } from "react";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

export default function Care() {
  const careRef = useRef(null);
  const { show } = useIntersectionObserver(careRef);

  return (
    <section className={`section care ${show ? "animate-fade-right duration-1000" : "opacity-0"}`}  ref={careRef}>
      <article>
        <h4 className="title">SOMOS Care</h4>
        <p>
          SOMOS network providers across New York City see over 25,000 primary
          and specialty patients per day on average from prenatal through senior
          care.
        </p>{" "}
        <br />
        <p>
          SOMOS network providers continue to provide exceptional, quality-based
          care to the person as a whole, continuing to provide mental health and
          behavioral health screenings and interventions, care coordination and
          assistance with addressing SDOH through community connections, etc.
        </p>{" "}
        <br />
        <p>
          SOMOS is the only one of the original 25 PPSs that continues charting
          and applying the value-based-payment model even after the cessation of
          DSRIP, by developing and applying cost-saving and life-saving
          innovations.
        </p>
      </article>
      <article className="care-items__container">
        {careData &&
          careData.map((item: any, i: number) => (
            <CareItem key={i} img={item.img} title={item.title} />
          ))}
      </article>
    </section>
  );
}
