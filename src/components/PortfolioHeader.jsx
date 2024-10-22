// import React from 'react';
// import Education from './Education';
// import ExperienceAndProjects from './ExperienceAndProjects';
// import Additional from './Additional';
// import InternshipExperience from './InternshipExperience';
// import PortfolioLayout from './PortfolioLayout';

// const PortfolioHeader = () => {
//     return (
//         <>
//         <div className="flex flex-col items-center justify-center m-40 bg-white">
//             {/* Header Section */}
//             <div className="text-center">
//                 <p className="text-gray-500 text-3xl">Hello... I'm</p>
//                 <h1 className="text-4xl md:text-6xl font-bold text-pink-800 mt-4" style={{ textShadow: '2px 2px 4px #FF69B4' }}>
//                     Anitha S
//                 </h1>

//                 <p className="text-2xl mt-4 text-gray-600 font-bold">
//                     Frontend Developer and Backend Developer / MERN Stack Developer
//                 </p>
//             </div>

//             {/* Quote Section */}
//             <div className="my-20">
//                 <p className="text-brown-600 text-3xl italic">
//                     "A full-stack developer is the architect and the builder of the digital realm."
//                 </p>
//             </div>

//             {/* Buttons Section */}
//             <div className="flex space-x-10 mt-20">
//                 <button className="bg-pink-300 hover:bg-pink-300 text-blue-900 font-bold py-4 px-10 rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 shadow-2xl">
//                     <span className="flex items-center">
//                         <span className="mr-2">🎓</span> Education
//                     </span>
//                 </button>

//                 <button className="bg-orange-300 hover:bg-orange-300 text-blue-900 font-bold py-6 px-12 rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 shadow-2xl">
//                     <span className="flex items-center">
//                         <span className="mr-2">💻</span> Projects
//                     </span>
//                 </button>
//                 <button className="bg-green-300 hover:bg-green-300 text-blue-900 font-bold py-6 px-12 rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 shadow-2xl">
//                     <span className="flex items-center">
//                         <span className="mr-2">📄</span> Resume
//                     </span>
//                 </button>
//                 <button className="bg-purple-300 hover:bg-purple-300 text-blue-900 font-bold py-4 px-10 rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 shadow-2xl">
//                     <span className="flex items-center">
//                         <span className="mr-2">🧳</span> Internships
//                     </span>
//                 </button>
//             </div>

//             {/* Circle Decorations */}
//             <div className="absolute top-60 left-40 animate-float">
//                 <div className="bg-pink-200 h-28 w-28 rounded-full"></div>
//             </div>
//             <div className="absolute top-80 right-60 animate-float">
//                 <div className="bg-pink-400 h-20 w-20 rounded-full"></div>
//             </div>
//             <div className="absolute top-60 right-60 animate-float">
//                 <div className="bg-pink-200 h-10 w-10 rounded-full"></div>
//             </div>

//         </div>

//         <Education/>
//         <ExperienceAndProjects/>
//         <Additional/>
//         <InternshipExperience/>
//         <PortfolioLayout/>

//         </>
//     );
// };

// export default PortfolioHeader;



import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './card';
import PortfolioLayout from './PortfolioLayout';
import Additional from './Additional';
import Skills from './Skills';
import Resume from './Resume';



const PortfolioHeader = () => {
    const roomsRef = useRef(null);
    const projectRef = useRef(null);
    const internshipsRef = useRef(null);
    const projects = [
        {
            title: " First Ladder",
            url: "https://firstladder.netlify.app/",
            color: "text-orange-500"
        },
        {
            title: "Maa hotellandingpage",
            url: "https://maahotels.in/book-now/",
            color: "text-orange-500"
        },
        {
            title: "Food delivery app",
            url: "https://foodappinmy.netlify.app",
            color: "text-orange-500"
        },
        {
            title: "pastrybakerylanding page",
            url: "https://pastrybakery.netlify.app",
            color: "text-orange-500"
        }
    ];

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
        <>
            <div className="flex flex-col items-center justify-center m-10 md:m-40 bg-white">
                {/* Header Section */}
                <div className="text-center">
                    <p className="text-gray-500 text-3xl">Hello... I'm</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-pink-800 mt-4" style={{ textShadow: '2px 2px 4px #FF69B4' }}>
                        Anitha S
                    </h1>
                    <p className="lg:text-2xl mt-4 text-gray-600 font-bold">
                        Frontend Developer and Backend Developer / MERN Stack Developer
                    </p>
                </div>

                {/* Quote Section */}
                <div className="lg:my-20 my-10 text-center">
                    <p className="text-brown-600 lg:text-3xl italic">
                        "A full-stack developer is the architect and the builder of the digital realm."
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-5 md:space-y-0 ">
                    <button className="bg-pink-300 hover:bg-pink-300 text-blue-900 font-bold py-4 px-10 rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 shadow-2xl"
                        onClick={() => {
                            roomsRef.current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}>
                        <span className="flex items-center">
                            <span className="mr-2">🎓</span> Education
                        </span>
                    </button>

                    <button className="bg-orange-300 hover:bg-orange-300 text-blue-900 font-bold py-4 px-10 rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 shadow-2xl"
                        onClick={() => {
                            projectRef.current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}>
                        <span className="flex items-center">
                            <span className="mr-2">💻</span> Projects
                        </span>
                    </button>

                    <button className="bg-green-300 hover:bg-green-300 text-blue-900 font-bold py-4 px-10 rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 shadow-2xl"
                        onClick={() => {
                            resumeRef.current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}>
                        <span className="flex items-center">
                            <span className="mr-2">📄</span> Resume
                        </span>
                    </button>

                    <button className="bg-purple-300 hover:bg-purple-300 text-blue-900 font-bold py-4 px-10 rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 shadow-2xl"
                        onClick={() => {
                            internshipsRef.current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}>
                        <span className="flex items-center">
                            <span className="mr-2">🧳</span> Internships
                        </span>
                    </button>
                </div>

                {/* Circle Decorations */}
                <div className="absolute top-60 lg:left-40 left-5 animate-float">
                    <div className="bg-pink-200 lg:h-28 lg:w-28 h-10 w-10 rounded-full "></div>
                </div>
                <div className="absolute top-80 lg:right-60 right-10 animate-float">
                    <div className="bg-pink-400 lg:h-20 lg:w-20 h-8 w-8 rounded-full"></div>
                </div>
                <div className="absolute top-60 lg:right-60 animate-float">
                    <div className="bg-pink-200 lg:h-10 lg:w-10 h-4 w-4 rounded-full"></div>
                </div>
            </div>


            {/* Education */}
            <section className="bg-white " ref={roomsRef}>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Education</h2>
                <div className={`flex flex-col md:flex-row flex-wrap justify-center gap-8 transition-transform duration-700 ${scrollY > 50 ? 'translate-y-0' : 'translate-y-12 opacity-0'}`}>
                    {/* B.Sc (Computer Science) Card */}
                    <div className="bg-gray-50 shadow-md rounded-lg p-6 w-full md:w-[30%] transition-transform duration-700 transform hover:-translate-y-4" onClick={handleClick}>
                        <h3 className="text-lg font-semibold text-purple-800">B.Sc (Computer Science)</h3>
                        <div className="border-t-2 border-green-300 my-2"></div>
                        <p className="text-gray-700">Bharathidasan University</p>
                        <p className="text-orange-500 font-semibold">2020 - 2023</p>
                        <p className="text-gray-600 mt-2">
                            Focused on software development, data structures, algorithms, and web development.
                        </p>
                    </div>

                    {/* HSC Card */}
                    <div className="bg-gray-50 shadow-md rounded-lg p-6 w-full md:w-[30%] transition-transform duration-700 transform hover:-translate-y-4" onClick={handleClick}>
                        <h3 className="text-lg font-semibold text-purple-800">HSC</h3>
                        <div className="border-t-2 border-green-300 my-2"></div>
                        <p className="text-gray-700">Govt.Hr.Sec School, Trichy</p>
                        <p className="text-orange-500 font-semibold">2019 - 2020</p>
                        <p className="text-gray-600 mt-2">
                            Completed coursework in mathematics, science, and biology.
                        </p>
                    </div>

                    {/* SSLC Card */}
                    <div className="bg-gray-50 shadow-md rounded-lg p-6 w-full md:w-[30%] transition-transform duration-700 transform hover:-translate-y-4" onClick={handleClick}>
                        <h3 className="text-lg font-semibold text-purple-800">SSLC</h3>
                        <div className="border-t-2 border-green-300 my-2"></div>
                        <p className="text-gray-700">Govt High School, Trichy</p>
                        <p className="text-orange-500 font-semibold">2017 - 2018</p>
                        <p className="text-gray-600 mt-2">
                            Tamil, English, Mathematics, Science, Social Science.
                        </p>
                    </div>
                </div>
            </section>

            <Skills/>


            {/* ExperienceAndProjects */}

            <section className='' ref={projectRef}>
                <div className="max-w-6xl mx-auto p-6 mt-20 ">
                    <h1 className="text-3xl font-bold text-center mb-8 text-pink-600 ">Experience & Projects</h1>

                    <h2 className="text-xl text-center mb-12 text-gray-400">Why Global Services at Chennai</h2>

                    <div className="relative ">
                        <div className="lg:absolute lg:left-[540px] lg:transform -translate-x-1/2 lg:h-full lg:w-1 lg:bg-pink-500"></div>

                        <div className="space-y-6">
                            <div className="relative">
                                <Card className="lg:w-[45%] max-w-xl ml-8 md:ml-0  md:mr-[52%] border bg-orange-50 box-shadow-2xl rounded-lg">
                                    <CardContent className="p-6">
                                        <h3 className="lg:text-xl font-semibold mb-4 text-pink-600">
                                            Websites : First Ladder
                                        </h3>
                                        <p className="text-gray-600">
                                            Elevating study abroad experiences with First
                                            Ladder's responsive website. pages ( Home, Blog,
                                            Contact Us, Dashboard, Footer, & Navbar) Technologies Used : React.js, Tailwind Css,
                                            Node.js,MongoDB, Express.js, We all contributed our skills and worked
                                            collaboratively as a team.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="relative">
                                <Card className="lg:w-[45%] max-w-xl ml-8 md:ml-[52%] border bg-orange-50 rounded-lg">
                                    <CardContent className="p-6">
                                        <h3 className="lg:text-xl font-semibold mb-4 text-pink-600">
                                            Self Projects: Maa hotellandingpage
                                        </h3>
                                        <p className="text-gray-600">
                                            At our hotel, we understand that guests have unique
                                            preferences and needs. That's why we offer a
                                            variety of thoughtfully designed room types
                                            Technologies Used : MongoDB, Express.js, React.js,
                                            Node.js, Tailwind css, Nodemailer
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="relative">
                                <Card className="lg:w-[45%] max-w-xl ml-8 md:ml-0  md:mr-[52%] border bg-orange-50 rounded-lg">
                                    <CardContent className="p-6">
                                        <h3 className="lg:text-xl font-semibold mb-4 text-pink-600">
                                            Self Projects:
                                            Shriharithamlandingpages
                                        </h3>
                                        <p className="text-gray-600">
                                            Our journey began with a shared vision of helping
                                            people find their dream homes and investment
                                            properties, and it has since evolved into a full-
                                            service real estate consultancy.
                                            Technologies Used : React.js, Tailwind css,Node js,
                                            Nodemailer
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="relative">
                                <Card className="lgLw-[45%] max-w-xl ml-8 md:ml-[52%] border bg-orange-50 rounded-lg">
                                    <CardContent className="p-6">
                                        <h3 className="lg:text-xl font-semibold mb-4 text-pink-600">
                                            Self Projects: pastrybakerylanding page
                                        </h3>
                                        <p className="text-gray-600">
                                            A comprehensive program in the science of baking
                                            and pastry art, this foundation course across 350+
                                            hours, 2 months is under the direction supervision
                                            of Chef Deepali Sawant. This course is industry
                                            recognised through certification by City & Guilds,
                                            London Technologies Used : React.js, Tailwind css,Node js,
                                            Nodemailer
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto p-6 text-center">
                    {/* Project Description */}
                    <p className="text-pink-600 mb-8 leading-relaxed">
                        Aspiring Full Stack Developer with 1 year Experience at Why Tap technologies like HTML, CSS, JavaScript, React.js,
                        and Tailwind CSS, as well as front-end and back-end technologies like Node.js, Express.js, MongoDB. Seeking to
                        leverage my technical skills and collaborative spirit to contribute to the success of your company.
                    </p>

                    {/* Project Links */}
                    <div className="flex flex-wrap justify-between gap-4 bg-gray-200">
                        {projects.map((project, index) => (
                            <Card key={index} className="flex-1 min-w-[250px]">
                                <CardContent className="p-6">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between group hover:opacity-80 transition-opacity"
                                    >
                                        <div>
                                            <h3 className={`font-medium text-lg ${project.color}`}>
                                                {project.title}
                                            </h3>
                                            <p className="text-green-500 text-sm mt-1 break-all">
                                                {project.url}
                                            </p>
                                        </div>
                                        {/* <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600" /> */}
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional */}
            <Additional />

            {/* InternshipExperience */}
            <section ref={internshipsRef}>
                <div className="relative flex justify-center items-center">

                    {/* Second Circle */}
                    <div className="absolute lg:top-60 lg:right-0 mr-60 animate-float">
                        <div className="bg-pink-400 lg:h-20 lg:w-20 h-10 w-10 rounded-full"></div>
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
                            <span className="font-semibold">Course Duration:</span> Six months (October 2023 to March 2024)
                            Certificate URL:{' '}
                            <a
                                href="https://certificate.whytap.in/fsd/minithasri/"
                                className="text-orange-500 hover:text-orange-600"
                            >
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
                                <div className="absolute left-1/2 transform -translate-x-1/2 ">
                                    <div className="w-6 h-6 rounded-full bg-pink-500"></div>
                                </div>
                                <Card className="w-full max-w-lg mx-auto bg-pink-100 rounded-lg  lg:w-[40%]  lg:ml-28 md:ml-10 lg:md:mr-auto lg:md:mr-[50%]">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">Full Stack Intern</h3>
                                        <p className="text-green-600 mb-3">Why Global Service Pvt Ltd</p>
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
                                <div className="absolute left-1/2 transform -translate-x-1/2 ">
                                    <div className="w-6 h-6 rounded-full bg-pink-500"></div>
                                </div>
                                <Card className="w-full max-w-lg mx-auto bg-pink-100 rounded-lg lg:w-[35%] lg:max-w-lg lg:mr-44 lg:md:r-[52%]">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">Frontend Technologies</h3>
                                        <p className="text-green-600 mb-3">Why Global Service Pvt Ltd</p>
                                        <p className="text-gray-600">
                                            Assisted in building scalable web applications during an internship using
                                            ReactJs & TailwindCSS, with a focus on front-end technologies including
                                            HTML, CSS, and JavaScript.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Figma, Canva */}
                            <div className="relative">
                                <div className="absolute left-1/2 transform -translate-x-1/2 ">
                                    <div className="w-6 h-6 rounded-full bg-pink-500"></div>
                                </div>
                                <Card className="w-full max-w-lg mx-auto bg-pink-100 rounded-lg mt-10 lg:w-[40%] lg:max-w-lg lg:ml-28 lg:md:ml-[52%]">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">Figma, Canva</h3>
                                        <p className="text-green-600 mb-3">Why Global Service Pvt Ltd</p>
                                        <p className="text-gray-600">
                                            During an internship, I chose colors based on the logo and client requirements for a perfect design before developing.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Resume/>

            {/* PortfolioLayout */}
            <PortfolioLayout />

        </>
    );
};

export default PortfolioHeader;
