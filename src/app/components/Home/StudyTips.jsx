import React from 'react';

const StudyTips = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Learning Tips & Productivity
          </h2>
          <p className="text-gray-500 mt-3">
            Improve your study habits and manage time effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Study Techniques */}
          <div className="bg-base-100 shadow-xl rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-5">
              📚 Study Techniques
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>✔️ Practice active recall while studying</li>
              <li>✔️ Use the Pomodoro technique</li>
              <li>✔️ Take short notes regularly</li>
              <li>✔️ Revise consistently every week</li>
              <li>✔️ Build project-based learning habits</li>
            </ul>
          </div>

          {/* Time Management */}
          <div className="bg-base-100 shadow-xl rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-5">
              ⏰ Time Management Tips
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>✔️ Create a daily learning schedule</li>
              <li>✔️ Avoid multitasking during study</li>
              <li>✔️ Set weekly learning goals</li>
              <li>✔️ Prioritize difficult topics first</li>
              <li>✔️ Track your progress consistently</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyTips;