import React from 'react';
import { Card, CardContent } from './card';

const InternshipExperience = () => {
  return (
    <>
    <section>
    <div className="relative  flex justify-center items-center">
            
            
            {/* Second Circle */}
            <div className="absolute top-60 right-0 animate-float ">
                <div className="bg-pink-400 h-20 w-20 rounded-full"></div>
            </div>
            
            {/* Third Circle */}
            <div className="absolute top-40 right-0 animate-float">
                <div className="bg-pink-200 h-10 w-10 rounded-full"></div>
            </div>
        </div>
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Internship Experiences</h1>
      
      {/* Course Duration Section */}
      <div className="mb-6">
        <p className="text-gray-700">
          <span className="font-semibold">Course Duration:</span> Six months (October 2023 to March 2024)   Certificate URL:{' '} <a href="https://certificate.whytap.in/fsd/minithasri/" 
             className="text-orange-500 hover:text-orange-600">
            https://certificate.whytap.in/fsd/minithasri/
          </a>
        </p>
       
        <p className="text-gray-700 mt-2">
          I completed my <span className="font-semibold">MERN Full Stack Development Course</span> at Why Tap. 
          During my internship, I worked on hands-on projects and collaborated with senior developers, 
          gaining practical experience. I developed a webpage using React.js, which enhanced my skills 
          in front-end development.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500"></div>

        {/* Timeline Items */}
        <div className="space-y-24">
          {/* Full Stack Intern */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -mb-1">
              <div className="w-6 h-6 rounded-full bg-pink-500"></div>
            </div>
            <Card className="w-[40%] max-w-lg ml-8 md:ml-20 md:mr-auto md:mr-[52%] bg-pink-100 rounded-lg mt-20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Full Stack Intern</h3>
                <p className="text-green-600 mb-3">Why Global Service Pvt ltd</p>
                <p className="text-gray-600">
                  Completed Full Stack Development training at Why Tap, where I collaborated 
                  with senior developers on hands-on projects and gained practical experience. 
                  During the internship, I developed a webpage using MERN stack technologies 
                  (ReactJs, ExpressJs, NodeJs, MongoDB)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Frontend Technologies */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
              <div className="w-6 h-6 rounded-full bg-pink-500"></div>
            </div>
            <Card className="w-[35%] max-w-lg ml-8 md:ml-[52%] bg-pink-100 rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Frontend Technologies</h3>
                <p className="text-green-600 mb-3">Why Global Service Pvt ltd</p>
                <p className="text-gray-600">
                  Assisted in building scalable web applications during an internship using 
                  ReactJs & TailwindCSS, with a focus on front-end technologies including 
                  HTML, CSS, and JavaScript.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -mb-1">
              <div className="w-6 h-6 rounded-full bg-pink-500"></div>
            </div>
            <Card className="w-[40%] max-w-lg ml-8 md:ml-20 md:mr-auto md:mr-[52%] bg-pink-100 rounded-lg mt-20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Figma ,Canva</h3>
                <p className="text-green-600 mb-3">Why Global Service Pvt ltd</p>
                <p className="text-gray-600">
                During an internship, to choose colors based on the logo and client requirements for a perfect design before developing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
    </div>
    </section>
    
    </>
  );
};

export default InternshipExperience;