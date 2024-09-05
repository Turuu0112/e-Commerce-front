"use client";
import Image from "next/image";
import { title } from "process";
import { useState } from "react";
const slides = [
  { title: "Slide ",
    image: "/Hoodie.png",
   },
  { title: "Slide 2" },
  { title: "Slide 3" },
];

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div className="w-screen h-[800px] overflow-hidden border relative border-cyan-800 bg-green-200">
      <div
        className="w-[300%] h-full flex [&>div]:text-5xl"
        style={{
          transform: `translateX(-${(slideIndex * 100) / 3}%)`,
          transition: "transform 0.5",
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} title={slide.title} />
        ))}
      </div>
      <div className="absolute flex gap-4 bottom-4 left-[calc(50%-52px)]">
        {slides.map((_, index) => (
          <Indicator
            key={index}
            active={index === slideIndex}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
type SlideProps = {
  title?: string;
  image: string;
 
};
const Slide = ({ title,image }: SlideProps) => {
  return (
    <div className="flex-1 h-full flex justify-center items-center relative">
      {title}
      <div className="absolute w-[100%] h-[100%] top-0 left-0 flex justify-center items-center">
      <Image src={image} alt={title} width={500} height={500} />
    </div>
    </div>
    
  );
};
type IndicatorProps = {
  active: boolean;
  onClick: () => void;
};
const Indicator = ({ active, onClick }: IndicatorProps) => {
  return (
    <div
      className={`cursor-pointer bg-white w-5 h-5 ${
        active ? "text-cyan-800" : "text-gray-500"
      } `}
      onClick={onClick}
    />
  );
};
