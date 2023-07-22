'use client';
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import Image from "next/image";
import React, { useRef } from "react";

export default function HealthEquity() {
  const healthEquityRef = useRef(null);
  const { show } = useIntersectionObserver(healthEquityRef);

  return (
    <section className={`${show ? "animate-flip-up" : "opacity-0"}`}  ref={healthEquityRef}>
      <article className="health">
        <Image
          alt="Health Equity NY"
          src="/images/health-equity.png"
          width={200}
          height={200}
          className="health-img"
        />
        <div className="health-content animated">
          <h6>HEALTH EQUITY NY</h6>
          <h4 className="font-bold health-content__title">
            Improving Health <br /> in Our Communities
          </h4>
          <p className="health-content__content">
            SOMO&rsquo;s network provides culturally competent care to patients
            located in some of NYC&rsquo;s most vulnerable communities and
            inmigrant neighborhoods of New York.
          </p>
          <div className="mt-5 flex justify-start items-center container-buttons__health">
            <a href="" className="btn-health">
              ANNUAL REPORT
            </a>
            <a href="" className="mx-3 btn-health__outset">
              FIND A DOCTOR
            </a>
          </div>
        </div>
      </article>
      <article className="text-white health-footer">
        <div className="health-personal">
          <h4>Health Care is Personal At SOMOS</h4>
          <p>
            SOMOS work is designed with the aim of reaching and caring for the
            most vulnerable, by furthering value-based care initiatives.
          </p>
          <a href="" className="mx-3 btn-health__outset">
            OUR MISSION
          </a>
        </div>
        <div className="health-communities">
          <h4>We Improve Health s In NYC Communities</h4>
          <p>
            SOMOS and its network providers are at the forefront of a movement
            that emphasizes keeping patients well, instead of continuing to
            invest in an outdated system that simply waits until they get sick.
          </p>
          <a href="" className="mx-3 btn-health__outset">
            GET INVOLVED
          </a>
        </div>
      </article>
    </section>
  );
}
