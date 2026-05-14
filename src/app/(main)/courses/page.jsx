import CourseCard from '@/app/components/Home/CourseCard';
import { getData } from '@/app/lib/data';
import Image from 'next/image';
import React from 'react';


const page = async () => {
  const courses = await getData();
  return (
    <div className="w-full md:w-9/12 mx-auto py-12 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 ">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default page;