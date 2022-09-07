import { Box } from "theme-ui"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import slide1 from "assets/images/slide_01.jpg"
import slide2 from "assets/images/slide_02.jpg"
import slide3 from "assets/images/slide_03.jpg"
import BannerComponent from "components/banner-component";

const Banner = () => {

    const data = [
        {
            id: 1,
            title: "COMMITTED TO ENABLING & THEM TO FACE THE WORLD.",
            desc: "Preparing visually impaired children to build their success story through technology aided education.",
            src: slide1.src,
            alt: "slide1"
        },
        {
            id: 2,
            title: "Committed to bringing & them closer to their dreams",
            desc: "Preparing visually impaired children to build their success story through technology aided education.",
            src: slide2.src,
            alt: "slide2"
        },
        {
            id: 3,
            title: "Committed to challenging & the world that they can!",
            desc: "Providing employment opportunities to hundreds who are visually challenged.",
            src: slide3.src,
            alt: "slide3"
        }
    ]

    return (
        <Box as="section" id="home" sx={styles.section}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop="true"
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: false,
                // }}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map(slide => {
                    return (
                        <SwiperSlide key={slide.id}>
                            <BannerComponent slideData={slide} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Box>
    )
}

export default Banner

const styles = {
    section: {
        height: "calc(100vh - 50px)",
        // width: "100%",
    },
}