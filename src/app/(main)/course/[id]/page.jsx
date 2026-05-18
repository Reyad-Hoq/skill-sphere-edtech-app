import Rating from '@/app/components/shared/Rating';
import { getCourseData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaClock, FaStar } from 'react-icons/fa6';
export const metadata = {
  title: "Course Details | SkillSphere",
  description: "Learn more about this course and its content.",
};
const page = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const course = await getCourseData(id);
  const curriculum = [
    {
      id: 1,
      title: "Introduction to Web Development",
      lessons: [
        "What is Web Development?",
        "Frontend vs Backend",
        "How the Internet Works",
        "Development Environment Setup",
      ],
    },
    {
      id: 2,
      title: "HTML Fundamentals",
      lessons: [
        "HTML Document Structure",
        "Headings, Paragraphs & Links",
        "Images & Multimedia",
        "Forms and Inputs",
      ],
    },
    {
      id: 3,
      title: "CSS Basics",
      lessons: [
        "Selectors & Colors",
        "Box Model",
        "Flexbox & Grid",
        "Responsive Design",
      ],
    },
    {
      id: 4,
      title: "JavaScript Essentials",
      lessons: [
        "Variables & Data Types",
        "Functions & Events",
        "DOM Manipulation",
        "ES6 Features",
      ],
    },
    {
      id: 5,
      title: "React & Next.js",
      lessons: [
        "React Components",
        "Props & State",
        "Next.js Routing",
        "API Integration",
      ],
    },
    {
      id: 6,
      title: "Project & Deployment",
      lessons: [
        "Build a Real Project",
        "Authentication Setup",
        "MongoDB Integration",
        "Deploy to Vercel",
      ],
    },
  ];

  return (
    <div className="w-full md:w-8/12 mx-auto p-4 my-12 flex flex-col md:flex-row gap-10 justify-between">
      <div className="card bg-base-100 shadow-xl w-full md:w-6/12">

        {/* Course Image */}
        <figure>
          <Image
            src={course.image}
            alt={course.title}
            width={500}
            height={300}
            className="w-full rounded-t-lg"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body flex flex-col justify-between">

          {/* Category */}
          <div>
            <span className="badge badge-warning mb-3">
              {course.category}
            </span>

            {/* Title */}
            <h2 className="card-title text-xl text-green-800 font-black">
              {course.title}
            </h2>

            {/* Description */}
            <p className="text-gray-500 mt-2">
              {course.description}
            </p>
          </div>

          {/* Bottom Info */}
          <div className="mt-5">

            {/* Instructor */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">
                Instructor: {course.instructor}
              </h3>

              <span className="badge badge-outline">
                {course.level}
              </span>
            </div>

            {/* Rating & Duration */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <Rating rating={course.rating} />
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{course.duration}</span>
              </div>
            </div>

            {/* Button */}
            <Link href="/enroll" className="btn btn-warning w-full mt-5">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
      <div className="space-y-5 w-full md:w-6/12">
        {curriculum.filter((module) => module.id === parseInt(id)).map((module) => (
          <div
            key={module.id}
            className="rounded-xl p-10 bg-base-100 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-3">
              Module {module.id}: {module.title}
            </h2>

            <ul className="space-y-2">
              {module.lessons.map((lesson, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-neutral/80"
                >
                  ✅ {lesson}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
