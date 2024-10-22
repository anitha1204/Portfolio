import React, { useEffect, useState } from 'react';

const Additional = () => {
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
        <section className="mt-10">
            <div className="bg-white py-8 px-4 md:px-10 lg:px-20">
                <h2 className="text-3xl font-bold text-center text-pink-600 mb-8 ">Additional Information</h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                    {/* Strength Card */}
                    <div
                        className={`bg-gray-50 shadow-md rounded-lg p-6 transition-transform duration-700 transform ${
                            scrollY > 50 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        } hover:-translate-y-2`}
                        onClick={handleClick}
                    >
                        <h3 className="text-xl font-semibold text-purple-800">Strength</h3>
                        <div className="border-t-2 border-green-300 my-2"></div>
                        <p className="text-gray-700">
                            Self-Motivated Person, Decision-Making Abilities, Problem Solving, and Ability to work independently.
                        </p>
                    </div>

                    {/* Personal Details Card */}
                    <div
                        className={`bg-gray-50 shadow-md rounded-lg p-6 transition-transform duration-700 transform ${
                            scrollY > 50 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        } hover:-translate-y-2`}
                        onClick={handleClick}
                    >
                        <h3 className="text-xl font-semibold text-purple-800">Personal Details</h3>
                        <div className="border-t-2 border-green-300 my-2"></div>
                        <p className="text-gray-700">
                            Languages: Tamil-English. Marital Status: Unmarried. DOB: 05/06/2002. Gender: Female
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Additional;
