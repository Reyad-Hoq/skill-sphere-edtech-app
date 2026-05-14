
import { getData } from '@/app/lib/data';
import React from 'react';
import CourseCard from './CourseCard';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';


const Courses = async () => {
  const courses = await getData();
  console.log(courses);
  return (
    <div className="w-full md:w-9/12 mx-auto py-12">
      <h2 className="text-4xl font-bold text-center my-8">Our Popular Courses</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 '>
        {
          courses
            .filter(course => course.rating > 4.7)
            .map(course => (
              <CourseCard key={course.id} course={course} />
            ))
        }
      </div>
      <Link href="/courses" className="text-xl font-bold flex items-center justify-center gap-2 my-8  text-green-800">
        <span>Explore More Courses</span>
        <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default Courses;