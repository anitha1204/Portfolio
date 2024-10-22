

import React, { useRef } from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Resume = () => {
    const pdfRef = useRef();

    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 10;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('resume.pdf');
        });
    };

    return (
        <>
            <h2 className="text-3xl font-bold text-center text-pink-600 mt-10">Resume</h2>
            <div className="max-w-2xl mx-auto p-8 bg-white overflow-y-auto" ref={pdfRef} style={{ maxHeight: '80vh' }}>
                {/* Header */}
                <header className="text-center mb-6">
                    <h1 className="text-2xl font-bold mb-2">Anitha S (Full Stack Developer)</h1>
                    <div className="flex items-center justify-center gap-4 text-sm">
                        <span>+91 7299658512</span>
                        <span>|</span>
                        <a href="mailto:anithas12042003@gmail.com" className="text-blue-900">
                            anithas12042003@gmail.com
                        </a>
                        <span>|</span>
                        <a
                            href="https://www.linkedin.com/in/anitha1204fullstackdeveloper/"
                            className="flex items-center space-x-2 hover:text-green-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={20} className='text-blue-900' />
                            <span className='text-blue-900'>LinkedIn</span>
                        </a>
                        <span className="mx-2">|</span>
                        <a
                            href="https://github.com/anitha1204"
                            className="flex items-center space-x-2 hover:text-green-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={20} className='text-blue-900' />
                            <span className='text-blue-900'>Github</span>
                        </a>
                    </div>
                    <p className="text-sm mt-1">Trichy-620009, TamilNadu</p>
                </header>

                {/* Objective */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-gray-300 mb-2">OBJECTIVE</h2>
                    <p className="text-sm">
                        Aspiring Full Stack Developer with 1 year Experience at Why Tap technologies like HTML, CSS, JavaScript, React.js,
                        and Tailwind CSS, as well as front-end and back-end technologies like Node.js, Express.js, MongoDB. Seeking to
                        leverage my technical skills and collaborative spirit to contribute to the success of your company.
                    </p>
                </section>

                {/* Experience */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-gray-300 mb-2">EXPERIENCE</h2>
                    <div className="mb-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold">Why Global Service</h3>
                                <p className="text-sm italic text-blue-500 font-semibold">MERN Stack Developer</p>
                            </div>
                            <div className="text-sm">
                                <p className='text-end'>Chennai</p>
                                <p>May 2024 - Present</p>
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
                                <p className="font-semibold">Bharathidasan University - B.sc (Computer Science)</p>
                                <p className="text-sm">CGPA: 7.5</p>
                            </div>
                            <div className="text-sm text-right">
                                <p>2020 - 2023</p>
                                <p>Trichy</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="font-semibold">Govt Hr Sec School - HSC</p>
                                <p className="text-sm">Percentage: 65</p>
                            </div>
                            <div className="text-sm text-right">
                                <p>2019</p>
                                <p>Trichy</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-gray-300 mb-2">PROJECTS</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold ">Why Global Service</h3>
                            <p className="text-md italic text-blue-500 font-semibold"> First Ladder</p>
                            <ul className=" list-inside text-sm mt-2 space-y-2">
                                <li>Elevating study abroad experiences with First Ladder's responsive website.</li>
                                <li>Developed interactive and intuitive menu sections and pages (Home, Blog, Contact Us, Dashboard, Footer, NavBar) using React.js and Tailwind CSS to ensure an optimal user experience across all devices.</li>
                                <li>Collaborated with senior developers to address technical issues and enhance website functionality while designing responsive key UI components.</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-md italic text-blue-500 font-semibold">Maa hotellandingpage</p>
                            <ul className=" list-inside text-sm mt-2 space-y-2">
                                <li>At our hotel, we understand that guests have unique preferences and needs. That's why we offer a variety of thoughtfully designed room types</li>
                                <li>Technologies Used: MongoDB, Express.js, React.js, Node.js, Tailwind css, Nodemailer.</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-md italic text-blue-500 font-semibold">pastrybakerylanding page</p>
                            <ul className=" list-inside text-sm mt-2 space-y-2">
                                <li>A comprehensive program in the science of baking and pastry art, this foundation course across 350+ hours, 2 months is under the direction supervision of Chef Deepali Sawant. This course is industry recognised through certification by City & Guilds, London</li>
                                <li>Technologies Used: MongoDB, Express.js, React.js, Node.js, Tailwind css, Nodemailer.</li>
                            </ul>
                        </div>
                        <div>
                            <a
                                href="https://resumeportfolios.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-md italic text-blue-500 font-semibold hover:text-blue-700"
                            >
                                Self Projects: Resume, Portfolio
                            </a>
                            <ul className="list-inside text-sm mt-2 space-y-2">
                                <li>Completed various projects using HTML, CSS, JavaScript, ReactJs, NodeJs, and ExpressJs, featuring CRUD operations and responsive design across all devices, including mobile, desktop, and iPad. These projects are showcased in my portfolio.</li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* Skills */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-gray-300 mb-2">SKILLS</h2>
                    <p className="text-md">
                        <span className="font-semibold text-blue-500 ">Programming Languages: </span>
                        HTML | CSS | JavaScript | React.js | TailwindCSS | Express.js | Node.js | MongoDB
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-gray-300 mb-2"> INTERNSHIP</h2>
                    <p className="text-md">
                        Completed Full Stack Development training at Why Tap, where I collaborated with senior developers on hands-on
                        projects and gained practical experience. During the internship, I developed a webpage using MERNstacktechnologies
                        (ReactJs, ExpressJs, NodeJs, MongoDB), contributing to project success and applying technical skills in a real-world
                        environment.
                        <span className="font-semibold text-blue-500 ">Programming Languages</span> [January 2023 to January 2024- One Year]

                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-gray-300 mb-2">STRENGTH</h2>
                    <p className="text-md">
                        Self- Motivated Person , Decision Making Abilities , Problem Solving and Ability to work independently .
                    </p>
                </section>

                {/* Additional Information */}
                <section>
                    <h2 className="text-lg font-bold border-b border-gray-300 mb-2">
                        ADDITIONAL INFORMATION
                    </h2>
                    <div className="text-sm flex flex-wrap space-x-8">
                        <p>
                            <span className="font-semibold">Languages: </span>Tamil-English
                        </p>
                        <p>
                            <span className="font-semibold">Marital Status: </span>Unmarried
                        </p>
                        <p>
                            <span className="font-semibold">Date of Birth: </span>05/06/2002
                        </p>
                        <p>
                            <span className="font-semibold">Gender: </span>Female
                        </p>
                    </div>
                </section>


            </div>
            <div className="text-center mt-8">
                <button
                    onClick={downloadPDF}
                    className="bg-blue-900 text-white px-6 py-2 rounded shadow-md hover:bg-blue-700 transition duration-300 mt-4"
                >
                    Download PDF
                </button>
            </div>
        </>
    );
};

export default Resume;
