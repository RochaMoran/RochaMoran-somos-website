'use client';
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { useRef } from "react";

export default function WhoWeAre() {
  const whoWeAreRef = useRef(null);
  const { show } = useIntersectionObserver(whoWeAreRef)

  return (
    <article className={`section about ${show ? 'animate-fade-up' : ''}`} ref={whoWeAreRef}>
      <h3 className="title about-title">Who we are</h3>
      <p>
        SOMOS Community Care (SOMOS), is New York’s only provider-led,
        nonprofit, community-based integrated health care network. It is
        comprised of over 2,500 network providers responsible for reaching and
        delivering care to over 1 Million Medicaid lives citywide.
      </p> <br />
      <p>
        Nearly one-quarter of New York City’s Medicaid population sees a SOMOS
        network provider, who works almost exclusively in lower income
        communities of color, in which health outcomes are lower and rates of
        illness are higher - and where, until recently, many lacked access to
        preventive care and had few options for care or were skeptical of the
        corporate institutional options that did exist.
      </p> <br />
      <p>
        SOMOS was designed as an intervention to turn around years of clinical
        neglect, chronic lack of resources, and little engagement to bring about
        healthier communities. For millions, a SOMOS network provider has meant
        that hope has finally arrived.
      </p>
      <a href="" className="block w-max m-auto mt-5 btn-about">
        <span>READ MORE</span>
      </a>
    </article>
  );
}
