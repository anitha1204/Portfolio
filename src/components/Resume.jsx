import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">Minithasri Krishnan</h1>
        <div className="flex items-center justify-center gap-4 text-sm">
          <span>+91 7299658512</span>
          <span>•</span>
          <span>minithasri.k2622@gmail.com</span>
          <span>•</span>
          <a href="#" className="flex items-center gap-1">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <a href="#" className="flex items-center gap-1">
            <Github size={16} />
            <span>Github</span>
          </a>
        </div>
        <p className="text-sm mt-1">Coimbatore-641047, TamilNadu</p>
      </header>

      {/* Objective */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2">OBJECTIVE</h2>
        <p className="text-sm">
          Passionate and dedicated front-end developer with a strong foundation in HTML, CSS, JavaScript, React.js, alongside
          knowledge of back-end technologies like MongoDB, Express.js, Node.js. Seeking an entry-level position to leverage my
          skills to create dynamic,responsive, and user-friendly web applications. Eager to learn and grow within a collaborative team environment, contributing to innovative projects that bridge front-end and back-end development.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2">EXPERIENCE</h2>
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Why Global Service</h3>
              <p className="text-sm italic">MERN Stack Developer</p>
            </div>
            <div className="text-sm">
              <p>Chennai</p>
              <p>May 2024 - Present 2024</p>
            </div>
          </div>
          <p className="text-sm mt-2">
            Built and maintained responsive web applications using MERN stack technologies HTML, CSS, JavaScript, Node.js
            Express.js, MongoDB and worked with senior developers and project managers to deliver high-quality, user-focused
            web solutions.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2">EDUCATION</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">PSV College of Engineering and Technology - B.Tech (IT)</p>
              <p className="text-sm">CGPA: 8.5</p>
            </div>
            <div className="text-sm text-right">
              <p>2019 - 2023</p>
              <p>Krishnagiri</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Govt Girls Hr Sec School - HSC</p>
              <p className="text-sm">Percentage: 84</p>
            </div>
            <div className="text-sm text-right">
              <p>2018-2019</p>
              <p>Krishnagiri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2">PROJECTS</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Why Global Service</h3>
            <p className="text-sm italic">MERN Stack Developer | May 2024 - Present 2024</p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-2">
              <li>Websites: Vivegam, Construction, Post Relief</li>
              <li>Developed interactive and intuitive menu sections and pages (Home, Blog, News, Contact Us, Dashboard, Footer, NavBar) using React.js and Tailwind CSS to ensure an optimal user experience across all devices.</li>
              <li>Collaborated with senior developers to address technical issues and enhance website functionality while designing responsive key UI components.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2">SKILLS</h2>
        <p className="text-sm">
          <span className="font-semibold">Programming Languages: </span>
          HTML, CSS, JavaScript, React.js, TailwindCSS, Express.js, Node.js, MongoDB
        </p>
      </section>

      {/* Additional Information */}
      <section>
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2">ADDITIONAL INFORMATION</h2>
        <div className="text-sm grid grid-cols-2 gap-4">
          <p><span className="font-semibold">Languages: </span>Tamil-English</p>
          <p><span className="font-semibold">Marital Status: </span>Unmarried</p>
          <p><span className="font-semibold">Date of Birth: </span>05/06/2002</p>
          <p><span className="font-semibold">Gender: </span>Female</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;