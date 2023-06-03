// import { useState, useEffect } from 'react';
// import tw from 'twin.macro';
// import styled from 'styled-components';
// import SwiperCore, { Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

// // install Swiper modules
// SwiperCore.use([Pagination]);

// const ImageSlider = () => {
//   const images = [
//     'assets/simlai/intro-slider-images/image1.svg',
//     'assets/simlai/intro-slider-images/image1.svg',
//     'assets/simlai/intro-slider-images/image1.svg',
//     'assets/simlai/intro-slider-images/image1.svg',
//   ];

//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       pagination={{ clickable: true }}
//     >
//       {images.map((image, index) => (
//         <SwiperSlide key={index}>
//           <Image src={image} alt={`Slide ${index}`} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// const Image = styled.img`
//   ${tw`object-cover w-full h-full`}
// `;

// export default ImageSlider;
