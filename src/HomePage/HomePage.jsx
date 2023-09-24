import React, { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";
import image1 from "../assets/home-intro.799e09af.svg";
import image2 from "../assets/why-sazim.3557c4f0.svg";
import image3 from "../assets/specialized-products.1cf3989b.svg";

const HomePage = () => {
  return (
    <div>
      <div className="flex bg-[#151C34] pt-10 pl-20 gap-2">
        {/* Left Column */}
        <div className="flex-1 p-8 text-left">
          <h1 className="text-5xl font-bold mb-4 text-[#2BAD81] pb-5 leading-normal">
            <span className="text-white">EMPOWERED</span> BY <br />
            Tech Enthusiasts and Godlike Masterminds!
          </h1>
          <p className="text-lg mb-4 text-white w-3/4 leading-loose">
            Unlocking the Future with TechCo Innovations: Where IoT,
            Cybersecurity, Software, E-commerce, Mobile Apps, and ERP seamlessly
            converge into boundless possibilities!
          </p>
          <Link to="/contact">
            <button className="mt-2 bg-[#151C34] text-white w-60 py-3 text-xl font-bold border-2 border-[#875D8D] px-4 py-2 hover:bg-[#875D8D]">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <div className="flex items-center justify-center">
            <img src={image1} alt="Image" className="w-1/2" />
          </div>
        </div>
      </div>
      {/* gap */}
      <div className="flex bg-[#151C34] pt-28 pl-20 gap-10">
        {/* Left Column */}
        <div className="flex-1">
          <div className="flex items-center justify-center">
            <img src={image2} alt="Image" className="w-1/2" />
          </div>
        </div>
        {/* Right Column */}
        <div className="flex-1 p-8 text-left">
          <h1 className="text-5xl font-bold mb-4 text-[#2BAD81] pb-5">
            Why TechCo?
          </h1>
          <p className="text-lg mb-4 text-white w-3/4 leading-loose">
            At TechCo Innovations, we transcend the ordinary, offering a
            comprehensive suite of services that redefine the technological
            landscape. We don't just keep up with the latest trends; we set
            them. Our team of seasoned professionals thrives on innovation,
            creating solutions that stay ahead of the curve in the ever-evolving
            tech world.
          </p>
          <Link to="/about">
            <button className="mt-2 bg-[#151C34] text-white w-60 py-3 text-xl font-bold border-2 border-[#875D8D] px-4 py-2 hover:bg-[#875D8D]">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      {/* gap */}
      <div className="flex bg-[#151C34] py-28 pl-20">
        {/* Left Column */}
        <div className="flex-1 p-8 text-left">
          <h1 className="text-5xl font-bold mb-4 text-[#2BAD81] pb-5">
            Specialized Products
          </h1>
          <p className="text-lg mb-4 text-white w-3/4 leading-loose">
            TechCo Innovations isn't just a service provider; we're your
            strategic partner in technological advancement. Our expertise spans
            IoT, cybersecurity, software development, e-commerce solutions,
            mobile app development, and ERP services.
          </p>
          <button className="mt-2 bg-[#151C34] text-white w-60 py-3 text-xl font-bold border-2 border-[#875D8D] px-4 py-2 hover:bg-[#875D8D]">
            Learn More
          </button>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <div className="flex items-center justify-center">
            <img src={image3} alt="Image" className="w-1/2" />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#151C34] pt-10 px-10 pb-16">
        <h1 className="text-5xl font-semibold text-[#2BAD81] pb-8">
          Client Testimonials
        </h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="text-center bg-[#2C2946] p-10">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  style={{ color: "#2BAD81" }}
                />
              </div>

              <p className="text-white text-left">
                Lorem ipsum dolor sit amet consectetur adipisienim numquam hic
                quas, assumenda, pariatur mollitia maiores ducimus? Eveniet aut
                error obcaecati, quis quod tempora! Suscipit totam culpa, est
                beatae vitae corrupti neque itaque eveniet, necessitatibus,
                recusandae aliquam debitis provident libero tenetur maiores
                veritatis quasi nam veniam.
              </p>
              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  style={{ color: "#2BAD81" }}
                />
              </div>
              <div className="flex items-center text-left">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="rounded-full w-14 h-14"
                />
                <p className="pl-2 text-white">
                  <span className="text-[#2BAD81]">Alister Cook</span>
                  <br /> COO at Riverine
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center bg-[#2C2946] p-10">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  style={{ color: "#2BAD81" }}
                />
              </div>

              <p className="text-white text-left">
                Lorem ipsum dolor sit amet consectetur adipisienim numquam hic
                quas, assumenda, pariatur mollitia maiores ducimus? Eveniet aut
                error obcaecati, quis quod tempora! Suscipit totam culpa, est
                beatae vitae corrupti neque itaque eveniet, necessitatibus,
                recusandae aliquam debitis provident libero tenetur maiores
                veritatis quasi nam veniam.
              </p>
              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  style={{ color: "#2BAD81" }}
                />
              </div>
              <div className="flex items-center text-left">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="rounded-full w-14 h-14"
                />
                <p className="pl-2 text-white">
                  <span className="text-[#2BAD81]">Alister Cook</span>
                  <br /> COO at Riverine
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center bg-[#2C2946] p-10">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  style={{ color: "#2BAD81" }}
                />
              </div>

              <p className="text-white text-left">
                Lorem ipsum dolor sit amet consectetur adipisienim numquam hic
                quas, assumenda, pariatur mollitia maiores ducimus? Eveniet aut
                error obcaecati, quis quod tempora! Suscipit totam culpa, est
                beatae vitae corrupti neque itaque eveniet, necessitatibus,
                recusandae aliquam debitis provident libero tenetur maiores
                veritatis quasi nam veniam.
              </p>
              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  style={{ color: "#2BAD81" }}
                />
              </div>
              <div className="flex items-center text-left">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="rounded-full w-14 h-14"
                />
                <p className="pl-2 text-white">
                  <span className="text-[#2BAD81]">Alister Cook</span>
                  <br /> COO at Riverine
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center bg-[#2C2946] p-10">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  style={{ color: "#2BAD81" }}
                />
              </div>

              <p className="text-white text-left">
                Lorem ipsum dolor sit amet consectetur adipisienim numquam hic
                quas, assumenda, pariatur mollitia maiores ducimus? Eveniet aut
                error obcaecati, quis quod tempora! Suscipit totam culpa, est
                beatae vitae corrupti neque itaque eveniet, necessitatibus,
                recusandae aliquam debitis provident libero tenetur maiores
                veritatis quasi nam veniam.
              </p>
              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  style={{ color: "#2BAD81" }}
                />
              </div>
              <div className="flex items-center text-left">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="rounded-full w-14 h-14"
                />
                <p className="pl-2 text-white">
                  <span className="text-[#2BAD81]">Alister Cook</span>
                  <br /> COO at Riverine
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 className="text-5xl text-center text-[#487a78] bg-[#151C34] font-bold pt-10">
        Tell us how we can help you
      </h1>
      <ContactForm />
    </div>
  );
};

export default HomePage;
