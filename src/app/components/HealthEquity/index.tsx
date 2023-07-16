import React from "react";

export default function HealthEquity() {
  return (
    <div className="section health">
      <div className="health-content animated">
        <h6>FEATURES</h6>
        <h4 className="font-bold health-content__title">
          Health Education <br /> Resources
        </h4>
        <p className="health-content__content">
          Aliquam nec enim nec est porta blandit. Mauris blandit nunc at
          pharetra tempor. Donec ut leo sed enim bibendum iaculis et nec eros.
          erat ligula, commodo id vestibulum ac, cursus et nisi. Vivamus id urna
          posuere orci molestie laoreet nec a eros.
        </p>
        <div className="mt-5 flex justify-start items-center">
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
