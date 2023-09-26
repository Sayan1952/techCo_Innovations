import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import contactimage from "../assets/contact-intro.607bb9b6.svg";

const ContactUs = () => {
  return (
    <div>
      <div className="md:flex bg-[#151C34] pt-10 md:pl-20 gap-2">
        {/* Left Column */}
        <div className="flex-1 p-8 text-left">
          <h1 className="text-5xl font-bold mb-4 text-white pb-5">
            Join hands with us to unlock a world of possibilities and elevate
            your <br />
            business to new heights. <br />
            <span className="text-[#4682a9]">Contact</span> us today to embark
            on a <br />
            transformative journey into the future of technology
          </h1>
          {/* <button className="mt-2 bg-[#151C34] text-white w-60 py-3 text-xl font-bold border-2 border-[#875D8D] px-4 py-2 hover:bg-[#875D8D]">
              Contact Us
            </button> */}
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <div className="flex items-center justify-center py-4 h-full">
            <img src={contactimage} alt="Image" className="w-64" />
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
