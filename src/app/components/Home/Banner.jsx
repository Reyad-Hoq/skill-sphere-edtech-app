"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <div className={"transition-all duration-700 " + current.bg}>
      <div
        className={`h-[60vh] flex flex-col justify-center items-center text-white  w-full md:w-9/12 mx-auto rounded-lg relative overflow-hidden`}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          {current.title}
        </h1>

        <p className="mt-4 text-sm md:text-lg text-center opacity-90">
          {current.desc}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <Link href="/login" className="btn px-4 py-2 bg-white text-black rounded">
            Get Started
          </Link>
          <Link href="/learn-more" className="btn bg-transparent px-4 py-2 border border-white text-white rounded">
            Learn More
          </Link>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full cursor-pointer ${i === index ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default Banner;
