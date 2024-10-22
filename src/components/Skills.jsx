// import React from 'react';

// const Skills = () => {
//   const skills = [
//     { name: 'HTML', bgColor: 'bg-red-500' },
//     { name: 'CSS', bgColor: 'bg-blue-500' },
//     { name: 'JavaScript', bgColor: 'bg-yellow-500' },
//     { name: 'React.js', bgColor: 'bg-teal-500' },
//     { name: 'Tailwind CSS', bgColor: 'bg-green-500' },
//     { name: 'Node.js', bgColor: 'bg-lime-500' },
//     { name: 'MongoDB', bgColor: 'bg-green-800' },
//     { name: 'Express.js', bgColor: 'bg-gray-800' },
//     { name: 'Figma', bgColor: 'bg-purple-500' }
//   ];

//   return (
//     <div className="p-6 mt-8">
//       <h1 className="text-3xl font-bold text-center mb-8">My Skills</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className={`
//               ${skill.bgColor}
//               text-white p-4 rounded-lg text-center shadow-lg
//               transform hover:scale-105 transition-transform duration-200
//                flex items-center justify-center
//               text-lg font-semibold
//             `}
//           >
//             {skill.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;



import React, { useEffect, useState } from 'react';

const Skills = () => {
  const buttons = [
    { label: 'JavaScript', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
    { label: 'React.js', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
    { label: 'Tailwind CSS', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
    { label: 'Node.js', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
    { label: 'MongoDB', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
    { label: 'Express.js', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
    { label: 'Figma', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
    { label: 'HTML', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
    { label: 'CSS', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Rotate the buttons every 2 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % buttons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [buttons.length]);

  return (
    <>
      <div className="relative w-full h-full flex justify-center items-center mt-20">
        <div className="relative lg:w-[450px] lg:h-[350px] w-[250px] h-80 lg:text-lg text-sm">
          {buttons.map((button, index) => (
            <div
              key={index}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${button.bgColor} lg:w-28 lg:h-12 w-16 h-10 rounded-lg flex justify-center items-center text-pink-600 transition-all duration-500 ease-in-out ${
                currentIndex === index ? 'scale-125' : 'scale-100'
              }`}
              style={{
                top: `${50 + 45 * Math.sin((index * 2 * Math.PI) / buttons.length)}%`,
                left: `${50 + 45 * Math.cos((index * 2 * Math.PI) / buttons.length)}%`,
              }}
            >
              {button.label}
            </div>
          ))}
          {/* Centered Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-pink-600">
            <h2 className="text-2xl font-bold">My Skills</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;



// import React, { useEffect, useState } from 'react';

// const Skills = () => {
//   const buttons = [
//     { label: 'JavaScript', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
//     { label: 'React.js', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
//     { label: 'Tailwind CSS', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
//     { label: 'Node.js', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
//     { label: 'MongoDB', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
//     { label: 'Express.js', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
//     { label: 'Figma', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
//     { label: 'HTML', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
//     { label: 'CSS', bgColor: 'bg-gradient-to-r from-green-200 via-rose-200 to-pink-200' },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // Rotate the buttons every 2 seconds
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % buttons.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [buttons.length]);

//   return (
//     <>
//       <div className="relative w-full h-full flex justify-center items-center mt-20">
//         <div className="relative w-[450px] h-[350px] text-lg">
//           {buttons.map((button, index) => (
//             <div
//               key={index}
//               className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${button.bgColor} w-28 h-12 rounded-lg flex justify-center items-center text-pink-600 transition-all duration-500 ease-in-out ${
//                 currentIndex === index ? 'scale-125' : 'scale-100'
//               } md:block hidden`} // Hidden by default, visible on medium screens
//               style={{
//                 top: `${50 + 45 * Math.sin((index * 2 * Math.PI) / buttons.length)}%`,
//                 left: `${50 + 45 * Math.cos((index * 2 * Math.PI) / buttons.length)}%`,
//               }}
//             >
//               {button.label}
//             </div>
//           ))}
//           {/* Stacked buttons for smaller screens */}
//           <div className="block md:hidden flex flex-col items-center">
//             {buttons.map((button, index) => (
//               <div
//                 key={index}
//                 className={`${button.bgColor} w-28 h-12 my-2 rounded-lg flex justify-center items-center text-pink-600`}
//               >
//                 {button.label}
//               </div>
//             ))}
//           </div>

//           {/* Centered Text */}
//           <div className="absolute lg:top-1/2 top-0 ml-40 lg:left-1/2 lg:transform -translate-x-1/2 -translate-y-1/2 lg:text-center text-pink-600">
//             <h2 className="text-2xl font-bold">My Skills</h2>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;

