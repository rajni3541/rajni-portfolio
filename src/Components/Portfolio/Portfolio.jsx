import React, { useEffect } from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ecommerce from '../../img/Capture.PNG'
import monster from '../../img/Capture2.PNG'
import social from '../../img/Capture3.PNG'
import portfolio from '../../img/Capture4.PNG'
import Aos from 'aos';
// import { navigation } from 'swiper';



const Portfolio = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    
    //     return (
    //         <div className="portfolio">
    //             {/* HEADING */}
    //             <span>Recent Projects</span>
    //             <span>Protfolio</span>

    //             {/* SLIDER */}
    //             {/* <Swiper
    //                 // spaceBetween={10}
    //                 // slidesPerView={3}
    //                 // grabCursor={true}
    //                 spaceBetween={50}
    //                 slidesPerView={3}
    //                 navigation
    //                 pagination={{ clickable: true }}
    //                 scrollbar={{ draggable: true }}
    //                 onSwiper={(swiper) => console.log(swiper)}
    //                 onSlideChange={() => console.log('slide change')}
    //                 className='portfolio-slider'
    //             >
    //                 <SwiperSlide>
    //                     <img src={monster} alt="" />
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                     <img src={ecommerce} alt="" />
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                     <img src={social} alt="" />
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                     <img src={portfolio} alt="" />
    //                 </SwiperSlide>
    //             </Swiper> */}


    // <Swiper
    //       slidesPerView={3}
    //       spaceBetween={30}
    //       pagination={{
    //         clickable: true,
    //       }}
    //       navigation={true}
    //     //   modules={[Navigation]}
    //       className="mySwiper"
    //     >
    //          <SwiperSlide>
    //                     <img src={monster} alt="" />
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                     <img src={ecommerce} alt="" />
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                     <img src={social} alt="" />
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                     <img src={portfolio} alt="" />
    //                 </SwiperSlide>
    //             </Swiper>

    //         </div>

    //     )

    return (
<>
        <div className="portfolio" data-aos="fade-up" id="portfolio">
            {/* HEADING */}        
                <span>Recent Projects</span>            <span>Protfolio</span>
        </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='slider'
            >
                <SwiperSlide className='sliders'><img src={monster} alt="" /></SwiperSlide>
                <SwiperSlide className='sliders'><img src={ecommerce} alt="" /></SwiperSlide>
                <SwiperSlide className='sliders'><img src={social} alt="" /></SwiperSlide>
                <SwiperSlide className='sliders'><img src={portfolio} alt="" /></SwiperSlide>
            </Swiper>
            </>
            )

}

            export default Portfolio