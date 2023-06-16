import { useState, useEffect } from "react";

const Slider = () => {
  const imgPaths = [
    "assets/simlai/intro-slider-images/slider1.jpg",
    "assets/simlai/intro-slider-images/slider2.jpg",
    "assets/simlai/intro-slider-images/slider3.jpeg",
    "assets/simlai/intro-slider-images/slider4.jpeg"
  ];
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(imgPaths[index]);

  useEffect(() => {
    setImage(imgPaths[index]);
  }, [index])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imgPaths.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nums = [1,2,3,4];
  const ballPath = "assets/simlai/intro-slider-images/unfocused-point.svg";
  const clickedBallPath = "assets/simlai/intro-slider-images/focused-point.svg";

  
  const handleIndex = (num: number) => {
    setIndex(num - 1);
  }

  return (
    <section className="w-full h-full px-4">
      <img src={image} alt="" className="w-full aspect-video rounded-xl border-[0.4rem] border-[#262649]"/>
      <div className="flex flex-row w-full justify-center py-4 gap-x-4">
        {nums.map((num) => 
          <img src={num === (index + 1) ? clickedBallPath : ballPath} alt="" key={num} className="w-2" onClick={() => handleIndex(num)}/>
        )}
      </div>
    </section>
  );
}

export default Slider;