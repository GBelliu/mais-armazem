import { Container } from "./styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
export function Clientes() {
  return (
    <Container>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={120}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        navigation={true}
        centeredSlides={true}
        className="swiperBeTheNumberOne"
        breakpoints={{
          1024: {
            centeredSlides: true,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./logo.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
