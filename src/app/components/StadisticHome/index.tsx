"use client";
import { formatNumber } from "@/app/helpers/functions";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Roboto } from "next/font/google";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function StadisticHome({ img, after, number, title }: any) {
  const statidisticRef = useRef(null);
  const { show } = useIntersectionObserver(statidisticRef);
  const [numberStadistic, setNumberStadistic] = useState(number > 80000 ? (number - 3000) : 0);

  if (show) {
    updateNumberStadistic();
  }

  function updateNumberStadistic() {
    const duration = 1500 / number;

    if (numberStadistic < number) {
      setTimeout(() => {
        setNumberStadistic(numberStadistic + 1);
      }, duration);
    }
  }

  return (
    <div
      className={`m-[15px] text-center stadistic-item ${
        roboto.className
      } stadistic ${show ? "animate-fade-down animate-duration-600 " : ""}`}
      ref={statidisticRef}
    >
      <Image
        src={img}
        alt="Stadistic"
        width={100}
        height={100}
        className="inline-block"
      />
      <p className="text-2xl">
        {formatNumber(numberStadistic)} {after}
      </p>
      <span className="w-[60%]">{title}</span>
    </div>
  );
}
