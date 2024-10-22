import React, { useEffect, useState } from 'react';

const Education = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleScroll = () => {
    if (!isClicked) {
      setScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Reset click state after a short delay
  };

  return (
    <div className="bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Education</h2>
      <div className={`flex flex-wrap justify-center gap-8 transition-transform duration-700 ${scrollY > 50 ? 'translate-y-0' : 'translate-y-12 opacity-0'}`}>
        {/* B.Sc (Computer Science) Card */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6 w-[30%] transition-transform duration-700 transform hover:-translate-y-4" onClick={handleClick}>
          <h3 className="text-lg font-semibold text-purple-800">B.Sc (Computer Science)</h3>
          <div className="border-t-2 border-green-300 my-2"></div>
          <p className="text-gray-700">Bharathidasan University</p>
          <p className="text-orange-500 font-semibold">2020 - 2023</p>
          <p className="text-gray-600 mt-2">
            Focused on software development, data structures, algorithms, and web development.
          </p>
        </div>

        {/* HSC Card */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6 w-[30%] transition-transform duration-700 transform hover:-translate-y-4" onClick={handleClick}>
          <h3 className="text-lg font-semibold text-purple-800">HSC</h3>
          <div className="border-t-2 border-green-300 my-2"></div>
          <p className="text-gray-700">Govt.Hr.Sec School, Trichy</p>
          <p className="text-orange-500 font-semibold">2019 - 2020</p>
          <p className="text-gray-600 mt-2">
            Completed coursework in mathematics, science, and biology.
          </p>
        </div>

        {/* SSLC Card */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6 w-[30%] transition-transform duration-700 transform hover:-translate-y-4" onClick={handleClick}>
          <h3 className="text-lg font-semibold text-purple-800">SSLC</h3>
          <div className="border-t-2 border-green-300 my-2"></div>
          <p className="text-gray-700">Govt High School, Trichy</p>
          <p className="text-orange-500 font-semibold">2017 - 2018</p>
          <p className="text-gray-600 mt-2">
            Tamil, English, Mathematics, Science, Social Science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
