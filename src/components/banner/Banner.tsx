"use client"
import React from "react";
import styles from "./banner.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Banner() {
  return (
    <div className={styles.m}>
         <div className="wrapper">
      <div className={styles.cont}>
        {/* Sidebar */}
        <div className={styles.left}>
          <ul>
            <a href="">
              <li>Solar Products</li>
            </a>
            <a href="">
              <li>Electronics</li>
            </a>
          </ul>
        </div>

        {/* Carousel */}
        <div className={styles.right}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className={styles.slideWrapper}>
                <img className={styles.img} src="./solarsales.jpg" />
                <div className={styles.overlayText}>Effortless Solar Installation for Your Home</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideWrapper}>
                <img className={styles.img} src="./laptop.png" />
                <div className={styles.overlayText}>Shop Quality Electronics</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideWrapper}>
                <img className={styles.img} src="./solarpanels.jpg" />
                <div className={styles.overlayText}>Shop Quality Solar Equipments</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Banner;
