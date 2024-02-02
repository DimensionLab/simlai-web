import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Slider = () => {
  const imgPaths = [
    "/assets/simlai/model_engineer_cover_image.png",
    "/assets/simlai/simulation-studio-image.png",
  ];
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(imgPaths[index]);

  useEffect(() => {
    setImage(imgPaths[index]);
  }, [index])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imgPaths.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nums = [1,2];
  const ballPath = "/assets/simlai/intro-slider-images/unfocused-point.svg";
  const clickedBallPath = "/assets/simlai/intro-slider-images/focused-point.svg";

  
  const handleIndex = (num: number) => {
    setIndex(num - 1);
  }

  return (
    <section className="w-full h-full px-4">
      <ImageWrapper>
        <Image src={image} alt="slider photo" className="w-full aspect-video rounded-xl" width={window.innerWidth * 0.95} height={(window.innerWidth * 0.95)* 0.56}/>
      </ImageWrapper>
      <div className="flex flex-row w-full justify-center py-4 gap-x-4">
        {nums.map((num) => 
          <Image src={num === (index + 1) ? clickedBallPath : ballPath} alt="" key={num} onClick={() => handleIndex(num)} width={12} height={12}/>
        )}
      </div>
    </section>
  );
}

export default Slider;

const ImageWrapper = styled.div`
  background: linear-gradient(180deg, #C063F9 0%, #8B7CFF 100%);
  border-radius: 0.75rem;
  padding: 0.4rem;
  display: flex;
  
  @media (min-width: 1024px) {
    padding: 1.3rem;
  }

  img {
    border: 5px solid rgba(59, 17, 81, 0.40);
    border-radius: 0.75rem;

    @media(min-width: 1024px) {
      border: 10px solid rgba(59, 17, 81, 0.40);
    }
  }
`