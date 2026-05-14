import { getCourseData } from '@/app/lib/data';
import React from 'react';

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const course = await getCourseData(id);
  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
};

export default page;