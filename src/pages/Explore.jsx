import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from "react";
import ProfilePostCard from "../component/ProfilePostCard";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import Loading from "../component/Loading";
import { FakeUsers } from "../constants/fakeData";
import NavigationButton from "../component/Navigation";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Explore = () => {
  const [posts, setposts] = useState([]);
  const [limitNum, setLimitNum] = useState(9);
  const [loading, setLoading] = useState(true);
  const slide_image = 'https://cutewallpaper.org/24/image-placeholder-png/index-of-img.png';

  useEffect(() => {
    const getData = async () => {

        setposts(FakeUsers);
        setLoading(false);
        // console.log(posts);
    };
    getData();
  }, [limitNum]);


  return (
    <div>
      <NavigationButton />
      <div className="lg:max-w-4xl mt-14 lg:mx-auto mb-8">
        <div className="block sm:hidden p-2">
          <div className="p-2 items-center w-full border-[1px] rounded">
            <form action="">
              <div className="flex gap-2 text-xs text-gray-600">
                <SearchIcon size={15} />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent h-full outline-none"
                />
              </div>
            </form>
          </div>
          <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
          <div className="slide-description">
            <p>Taufik Heryunanto</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
          <div className="slide-description">
            <p>Heryunanto</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
          <div className="slide-description">
            <p>Opik</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
          <div className="slide-description">
            <p>jsajjs</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
        </div>
        {loading && (
          <div className="flex items-center justify-center h-screen">
            <Loading />
          </div>
        )}

        {posts?.length === 0 && !loading && (
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">No posts yet</div>
          </div>
        )}
        <motion.div
          layout
          className="grid grid-cols-3 md:gap-5 gap-0.5 md:p-2 p-0.5"
        >
          {posts.map((post, index) => (
            <ProfilePostCard
              key={post?.id}
              //   span={(index + 1) % 2 === 0 && (index + 1) % 3 !== 0}
              span={[2, 10, 20, 28, 38].includes(index + 1)}
              post={post}
            />
          ))}
        </motion.div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setLimitNum(limitNum + 9)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
