import { useEffect, useState } from "react";
const options = {
  threshold: .3,
  rootMargin: "100px",
};

export default function useIntersectionObserver(elementRef: any) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showStadistic = (entries: any, observer: any) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(showStadistic, options);

    if (elementRef && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return {
    show
  }
}
