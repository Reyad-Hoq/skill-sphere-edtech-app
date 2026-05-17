'use client';
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import {
  FaEnvelope,
  FaUserGraduate,
  FaBookOpen,
} from "react-icons/fa";
import image from "@/assets/user.png";
const ProfilePage = () => {
  const { data } = useSession();
  const user = data?.user;
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Profile Card */}
        <div className="bg-base-100 shadow-xl rounded-3xl overflow-hidden">

          {/* Cover */}
          <div className="h-48 bg-gradient-to-r from-primary via-55% to-orange-400"></div>

          {/* Profile Content */}
          <div className="px-8 pb-10">

            {/* Profile Image */}
            <div className="-mt-16 flex justify-center">
              <Image
                src={image}
                alt={user?.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-white object-cover"
              />
            </div>

            {/* User Info */}
            <div className="text-center mt-5">
              <h1 className="text-3xl font-bold">
                {user?.name}
              </h1>

              <p className="text-gray-500 mt-2">
                Passionate learner & future developer
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

              {/* Email */}
              <div className="bg-base-200 rounded-2xl p-6 text-center">
                <FaEnvelope className="text-3xl mx-auto mb-4 text-primary" />

                <h2 className="font-semibold text-lg">
                  Email
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  {user?.email}
                </p>
              </div>

              {/* Role */}
              <div className="bg-base-200 rounded-2xl p-6 text-center">
                <FaUserGraduate className="text-3xl mx-auto mb-4 text-primary" />

                <h2 className="font-semibold text-lg">
                  Role
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  {user?.role === "student" ? "Student" : "Instructor"}
                </p>
              </div>

              {/* Courses */}
              <div className="bg-base-200 rounded-2xl p-6 text-center">
                <FaBookOpen className="text-3xl mx-auto mb-4 text-primary" />

                <h2 className="font-semibold text-lg">
                  Courses
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  {user?.enrolledCourses} Enrolled
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button className="btn btn-primary px-8">
                Edit Profile
              </button>

              <button className="btn btn-outline btn-primary px-8">
                My Courses
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfilePage;