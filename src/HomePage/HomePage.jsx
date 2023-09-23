import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div className="flex bg-[#151C34] pt-10 pl-10 gap-2">
                {/* Left Column */}
                <div className="flex-1 p-8 text-left">
                    <h1 className="text-5xl font-bold mb-4 text-[#2BAD81] pb-5"><span className='text-white'>EMPOWERED</span> BY <br />Tech Enthusiasts and Godlike Masterminds!</h1>
                    <p className="text-lg mb-4 text-white w-3/4">
                        Unlocking the Future with TechCo Innovations: Where IoT, Cybersecurity, Software, E-commerce, Mobile Apps, and ERP seamlessly converge into boundless possibilities!
                    </p>
                    <button className="mt-2 bg-[#151C34] text-white w-60 py-3 text-xl font-bold border-2 border-[#875D8D] px-4 py-2 hover:bg-[#875D8D]">
                        Contact Us
                    </button>
                </div>

                {/* Right Column */}
                <div className="flex-1">
                    <img
                        src="/path/to/your/image.jpg"
                        alt="Image"
                        className="w-full h-auto"
                    />
                </div>
            </div>
            <div className="flex bg-[#151C34] pt-16 pl-10 gap-10">
                {/* Left Column */}
                <div className="flex-1 pl-16">
                    <img
                        src="/path/to/your/image.jpg"
                        alt="Image"
                        className="w-full h-auto"
                    />
                </div>
                {/* Right Column */}
                <div className="flex-1 p-8 text-left">
                    <h1 className="text-5xl font-bold mb-4 text-[#2BAD81] pb-5">Why TechCo</h1>
                    <p className="text-lg mb-4 text-white w-3/4">
                        At TechCo Innovations, we transcend the ordinary, offering a comprehensive suite of services that redefine the technological landscape. We don't just keep up with the latest trends; we set them. Our team of seasoned professionals thrives on innovation, creating solutions that stay ahead of the curve in the ever-evolving tech world.
                    </p>
                    <button className="mt-2 bg-[#151C34] text-white w-60 py-3 text-xl font-bold border-2 border-[#875D8D] px-4 py-2 hover:bg-[#875D8D]">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="flex bg-[#151C34] pt-10 pl-10">
                {/* Left Column */}
                <div className="flex-1 p-8 text-left">
                    <h1 className="text-5xl font-bold mb-4 text-[#2BAD81] pb-5">Specialized Products</h1>
                    <p className="text-lg mb-4 text-white w-3/4">
                        TechCo Innovations isn't just a service provider; we're your strategic partner in technological advancement. Our expertise spans IoT, cybersecurity, software development, e-commerce solutions, mobile app development, and ERP services.
                    </p>
                    <button className="mt-2 bg-[#151C34] text-white w-60 py-3 text-xl font-bold border-2 border-[#875D8D] px-4 py-2 hover:bg-[#875D8D]">
                        Learn More
                    </button>
                </div>

                {/* Right Column */}
                <div className="flex-1">
                    <img
                        src="/path/to/your/image.jpg"
                        alt="Image"
                        className="w-full h-auto"
                    />
                </div>
            </div>
            <div className="flex-1 bg-[#151C34] pt-10 pl-10">
                <h1 className='text-5xl font-semibold text-[#2BAD81] pb-8'>Client Testimonials</h1>

            </div>


        </div>
    );
};

export default HomePage;