
import { getData } from '@/app/lib/data';
import React from 'react';


const Courses = async () => {
  const courses = await getData();
  console.log(courses);
  return (
    <div>
      Hello from courses {courses[0].title}
    </div>
  );
};

export default Courses;