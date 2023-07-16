'use client';
import { useState } from 'react';

export default function useCarrousel(size: any) {
  const [index, setIndex] = useState(0);

  function toggleBack() {
    setIndex(prevIndex => (prevIndex === 0 ? size - 1 : prevIndex - 1));
  }

  function toggleNext() {
    setIndex(prevIndex => (prevIndex === size - 1 ? 0 : prevIndex + 1));
  }

  const updateIndex = (i: number) => {
    setIndex(() => i);
  };

  return {
    index,
    toggleNext,
    toggleBack,
    updateIndex,
  };
}
