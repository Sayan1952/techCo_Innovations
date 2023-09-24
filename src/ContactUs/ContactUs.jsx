import React from "react";
import ContactForm from "../ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <div>
      <div className="flex bg-[#151C34] pt-10 pl-10 gap-2">
        {/* Left Column */}
        <div className="flex-1 p-8 text-left">
          <h1 className="text-5xl font-bold mb-4 text-white pb-5">
            Join hands with us to unlock a world of possibilities and elevate
            your <br />
            business to new heights. <br />
            <span className="text-[#487a78]">Contact</span> us today to embark
            on a <br />
            transformative journey into the future of technology
          </h1>
          {/* <button className="mt-2 bg-[#151C34] text-white w-60 py-3 text-xl font-bold border-2 border-[#875D8D] px-4 py-2 hover:bg-[#875D8D]">
              Contact Us
            </button> */}
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
      <ContactForm />
    </div>
  );
};

export default ContactUs;
