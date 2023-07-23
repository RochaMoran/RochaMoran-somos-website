"use client";
import ItemCarrosuel from "../ItemCarrousel";
import { carrouselData } from "@/app/data/carrousel";
import { useEffect, useState } from "react";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { useRef } from "react";

export default function Carrousel() {
  const [index, setIndex] = useState(0);
  const carrouselRef = useRef(null);
  const { show } = useIntersectionObserver(carrouselRef);

  const updateIndex = (i: number) => {
    setIndex(() => i);
  };

    // Auto slide effect
    useEffect(() => {
      let intervalId: NodeJS.Timeout;
  
      const autoSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % carrouselData.length);
      };
  
      if (show) {
        intervalId = setInterval(autoSlide, 10000); // Change slide every 5 seconds (adjust the time as needed)
      }
  
      return () => {
        clearInterval(intervalId);
      };
    }, [show]);

  return (
    <article
      className={`main-carrousel ${show ? "animate-fade-down" : ""}`}
      ref={carrouselRef}
    >
      <div
        className="main-carrousel__container"
        style={{
          transform: `translateX(${-index * 100}%)`,
          gridTemplateColumns: `repeat(${carrouselData.length}, 100%)`,
        }}
      >
        {carrouselData.map((item) => (
          <ItemCarrosuel
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            src={item.src}
            isVideo={item.isVideo}
          />
        ))}
      </div>
      <div className="carrousel-circle">
        {carrouselData.map((item, i) => (
          <div
            onClick={() => updateIndex(i)}
            key={item.id}
            className={
              index === i
                ? "carrousel-circle__item carrousel-circle__item-active"
                : "carrousel-circle__item"
            }
          />
        ))}
      </div>
    </article>
  );
}
