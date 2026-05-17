import Image from 'next/image';
import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa6';
import Rating from '../shared/Rating';
import Link from 'next/link';

const CourseCard = ({ course }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-lg h-full">
        <figure className="px-10 pt-10">
          <Image
            src={course.image}
            alt={course.title}
            width={600}
            height={100}
            className="rounded-lg" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-black text-green-800">{course.title}</h2>
          <p>By {course.instructor}</p>
          <div className='bg-slate-50 flex justify-between p-1'>
            <h2 className='flex gap-2 items-center'>
              <Rating rating={course.rating} />
            </h2>
          </div>
          <div className="card-actions">
            <Link href={`/course/${course.id}`} className="btn btn-warning">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;