'use client';

import Image from 'next/image';
import userAvatar from '@/assets/user.png';
import React, { useState } from 'react';

const EditProfile = () => {
  const [preview, setPreview] = useState(userAvatar);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // profile update logic here
    console.log('Profile Updated');
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-5">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl">

        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">
            Edit Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Profile Image */}
            <div className="flex flex-col items-center gap-4">
              <div className="avatar">
                <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src={preview}
                    alt="Profile Preview"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
              </div>

              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered w-full max-w-xs"
                onChange={handleImageChange}
              />
            </div>

            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Full Name
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                defaultValue="Reyad Hoq"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Email Address
                </span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                defaultValue="example@gmail.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Phone Number
                </span>
              </label>

              <input
                type="tel"
                placeholder="+8801XXXXXXXXX"
                className="input input-bordered w-full"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Bio
                </span>
              </label>

              <textarea
                className="textarea textarea-bordered w-full h-28"
                placeholder="Write something about yourself..."
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                className="btn btn-outline"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Save Changes
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;