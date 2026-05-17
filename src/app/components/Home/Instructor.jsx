import Image from 'next/image';
import React from 'react';

const Instructor = () => {
  return (
    <div className="py-16 bg-green-50 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Top Instructors
          </h2>

          <p className="text-gray-500 mt-3">
            Learn from industry experts and experienced mentors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Instructor Card */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="pt-6">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Instructor"
                className="w-28 h-28 rounded-full object-cover"
                width={112}
                height={112}
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">
                John Doe
              </h2>

              <p className="text-sm text-primary font-medium">
                Full Stack Developer
              </p>

              <p className="text-gray-500 text-sm">
                10+ years experience in web development and mentoring.
              </p>
            </div>
          </div>

          {/* Instructor Card */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="pt-6">
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Instructor"
                className="w-28 h-28 rounded-full object-cover"
                width={112}
                height={112}        
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Sarah Johnson
              </h2>

              <p className="text-sm text-primary font-medium">
                UI/UX Designer
              </p>

              <p className="text-gray-500 text-sm">
                Specialized in modern UI systems and product design.
              </p>
            </div>
          </div>

          {/* Instructor Card */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="pt-6">
              <Image
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Instructor"
                className="w-28 h-28 rounded-full object-cover"
                width={112}
                height={112}
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Michael Smith
              </h2>

              <p className="text-sm text-primary font-medium">
                Backend Engineer
              </p>

              <p className="text-gray-500 text-sm">
                Expert in APIs, databases, and scalable systems.
              </p>
            </div>
          </div>

          {/* Instructor Card */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="pt-6">
              <Image
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Instructor"
                className="w-28 h-28 rounded-full object-cover"
                width={112}
                height={112}
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Emily Davis
              </h2>

              <p className="text-sm text-primary font-medium">
                Data Science Mentor
              </p>

              <p className="text-gray-500 text-sm">
                Passionate about AI, machine learning, and analytics.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Instructor;