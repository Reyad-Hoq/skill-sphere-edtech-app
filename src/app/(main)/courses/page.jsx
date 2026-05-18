import CourseCard from '@/app/components/Home/CourseCard';
import { getData } from '@/lib/data';
import React from 'react';

const Page = async ({ searchParams }) => {

  const params = await searchParams;

  const courses = await getData();

  const searchText = params?.search?.toLowerCase() || '';

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchText) ||
      course.instructor.toLowerCase().includes(searchText)
  );

  return (
    <div className="w-full md:w-9/12 mx-auto py-12 p-6 bg-orange-100 rounded-lg my-10">

      {/* Header */}
      <div className="col-span-1 lg:col-span-3">
        <h1 className="text-4xl font-bold text-center mb-4">
          Explore Our Courses
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Discover a wide range of courses designed to help you learn and grow.
        </p>

        {/* Search Form */}
        <form
          action="/courses"
          className="flex justify-center mb-8"
        >
          <input
            type="text"
            name="search"
            defaultValue={searchText}
            placeholder="Search courses..."
            className="border border-gray-300 bg-orange-50 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-6/12"
          />

          <button
            type="submit"
            className="bg-orange-500 text-white px-6 rounded-r-md"
          >
            Search
          </button>
        </form>
      </div>

      {/* Courses */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <h2 className="text-center text-red-500 text-2xl col-span-3">
            No Course Found
          </h2>
        )}
      </div>
    </div>
  );
};

export default Page;