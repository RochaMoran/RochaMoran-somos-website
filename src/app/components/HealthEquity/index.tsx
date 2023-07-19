import Image from "next/image";
import React from "react";

export default function HealthEquity() {
  return (
    <div className="health">
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
    </div>
  );
}
