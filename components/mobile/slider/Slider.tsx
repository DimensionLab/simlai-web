"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import css from "./slider.module.css";
import { cn } from "@/lib/utils";

const Slider = () => {
  const imgPaths = [
    "/assets/simlai/model_engineer_cover_image.png",
    "/assets/simlai/simulation-studio-image.webp",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imgPaths.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nums = [1, 2];
  const ballPath = "/assets/simlai/intro-slider-images/unfocused-point.svg";
  const clickedBallPath =
    "/assets/simlai/intro-slider-images/focused-point.svg";

  const handleIndex = (num: number) => {
    setIndex(num - 1);
  };

  return (
    <section className="w-full h-full px-4">
      {imgPaths.map((img, i) => (
        <div key={i} className={cn(`${index !== i && "hidden"}`)}>
          <div className={css.imageWrapper}>
            <Image
              src={imgPaths[i]}
              alt="slider photo"
              className="w-full aspect-video rounded-xl"
              width={2996}
              height={1614}
              priority
              quality={40}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mMss3nyn4EIwDiqkL4KAX5SGd1NFAjQAAAAAElFTkSuQmCC"
              placeholder="blur"
            />
          </div>
        </div>
      ))}
      <div className="flex flex-row w-full justify-center py-4 gap-x-4">
        {nums.map((num) => (
          <Image
            src={num === index + 1 ? clickedBallPath : ballPath}
            alt=""
            key={num}
            onClick={() => handleIndex(num)}
            width={12}
            height={12}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
