"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Learn Modern Web Development",
    desc: "Build real-world projects with Next.js",
    bg: "bg-green-900",
  },
  {
    title: "Master JavaScript & React",
    desc: "Become job-ready with hands-on practice",
    bg: "bg-orange-500",
  },
  {
    title: "Build Your Future with SkillSphere",
    desc: "Join thousands of developers",
    bg: "bg-black",
  },
];

const Banner = () => {
  return (
    <div className="w-full md:w-9/12 mx-auto mt-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`h-[60vh] flex flex-col justify-center items-center text-white ${slide.bg}`}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-center">
                {slide.title}
              </h1>

              <p className="mt-4 text-sm md:text-lg text-center opacity-90">
                {slide.desc}
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  href="/login"
                  className="px-4 py-2 bg-white text-black rounded"
                >
                  Get Started
                </Link>

                <Link
                  href="/learn-more"
                  className="px-4 py-2 border border-white text-white rounded"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;