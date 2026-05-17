import Rating from '@/app/components/shared/Rating';
import { getCourseData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaClock, FaStar } from 'react-icons/fa6';

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const course = await getCourseData(id);
  return (
    <div className="w-full md:w-8/12 mx-auto p-4 my-12">
      <div className="card bg-base-100 shadow-xl h-full">

        {/* Course Image */}
        <figure>
          <Image
            src={course.image}
            alt={course.title}
            width={500}
            height={300}
            className="w-full h-96 object-cover rounded-t-lg"
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
    </div>
  );
};

export default page;
