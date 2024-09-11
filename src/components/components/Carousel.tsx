"use client";
import { Fullscreen } from "lucide-react";
import Image from "next/image";
import { title } from "process";
import { useState } from "react";
const slides = [
  { title: "Hoodie ", price: "100'000₮", image: "/Hoodie.png" },
  { title: "Cap", price: "10'000₮", image: "/hat.png" },
  { title: "Shirt", price: "50'000 ", image: "/image.png" },
];

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div className="w-full h-full px-[200px] ">
      <div className="w-full h-[800px] overflow-hidden border relative border-cyan-800 bg-green-200 mt-16 rounded-3xl ">
        <div
          className="w-[300%] h-full flex [&>div]:text-5xl"
          style={{
            transform: `translateX(-${(slideIndex * 100) / slides.length}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              title={slide.title}
              image={slide.image}
              price={slide.price}
            />
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
    </div>
  );
};
type SlideProps = {
  key: number;
  title?: string;
  image: string;
  price: string;
};
const Slide = ({ title, image, price }: SlideProps) => {
  return (
    <div className="flex-1 h-full flex justify-center items-center relative">
      <div className="flex-1 h-full flex justify-start items-center z-20   ">
        <div className="text-5xl absolute  bottom-0 left-0 p-20 text-red-500">
          <h1>{title}</h1>
          <h1>{price}</h1>
        </div>
      </div>
      <div className="absolute w-[100%] h-[100%] top-0 left-0 flex justify-center items-center">
        <Image
          src={image}
          alt={image}
          width={1000}
          height={500}
          className="w-full h-full object-center"
        />
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
