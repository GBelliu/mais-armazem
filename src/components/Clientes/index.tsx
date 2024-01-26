import { Container, ContentSlide } from "./styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
export function Clientes() {
  return (
    <Container id="clientes">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={120}
        speed={3000}
        loop={true}
        autoplay={{
          delay: 1,
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
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide>
            <img src="./logo.png" alt="" />
          </ContentSlide>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
