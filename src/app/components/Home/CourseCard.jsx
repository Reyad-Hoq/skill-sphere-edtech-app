import Image from 'next/image';
import React from 'react';

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
          <p>{course.description}</p>
          <div className="card-actions">
            <button className="btn btn-warning">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;