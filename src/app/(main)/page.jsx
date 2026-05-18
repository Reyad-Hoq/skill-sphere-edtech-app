import Banner from '@/app/components/Home/Banner';
import Courses from '@/app/components/Home/Courses';
import Navbar from '@/app/components/shared/Navbar';
import React from 'react';


const page = () => {
  return (
    <div className="bg-orange-100 min-h-screen">
      <Banner />
      <Courses />
    </div>
  );
};

export default page;