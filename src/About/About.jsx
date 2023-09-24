import React from "react";
import ContactForm from "../ContactForm/ContactForm";

const About = () => {
  return (
    <div className>
      <div className="flex bg-[#151C34] pt-10 pl-10 gap-2">
        {/* Left Column */}
        <div className="flex-1 p-8 text-left">
          <h1 className="text-5xl font-bold mb-4 text-[#2BAD81] pb-5">
            <span className="text-white">Seamless</span> Integration
          </h1>
          <p className="text-lg mb-4 text-white w-3/4">
            Our services don't exist in isolation; they seamlessly integrate to
            provide you with holistic solutions. Whether it's your IoT devices
            communicating flawlessly or your software and ERP systems working in
            harmony, we ensure a seamless technological ecosystem.
          </p>
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
          <h1 className="text-5xl font-bold mb-4 text-[#2BAD81] pb-5">
            Future-Ready Solutions
          </h1>
          <p className="text-lg mb-4 text-white w-3/4">
            We don't just address today's challenges; we anticipate tomorrow's
            opportunities. Our forward-looking solutions prepare your business
            for the future, helping you stay agile and adaptive
          </p>
        </div>
      </div>
      <div className="flex bg-[#151C34] pt-10 pl-10 gap-2">
        {/* Left Column */}
        <div className="flex-1 p-8 text-left">
          <h1 className="text-5xl font-bold mb-4 text-[#2BAD81] pb-5">
            Unparalleled Expertise
          </h1>
          <p className="text-lg mb-4 text-white w-3/4">
            Our team comprises experts with deep knowledge in their respective
            fields. From certified cybersecurity professionals to experienced
            software engineers, our collective knowledge ensures top-tier
            solutions for every aspect of your business.
          </p>
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
          <h1 className="text-5xl font-bold mb-4 text-[#2BAD81] pb-5">
            End-to-End Services
          </h1>
          <p className="text-lg mb-4 text-white w-3/4">
            Whether it's securing your digital assets, building a user-friendly
            app, optimizing your e-commerce platform, or streamlining your
            operations with ERP, we have you covered from concept to execution.
          </p>
        </div>
      </div>
      <div className="flex bg-[#151C34] pt-10 pl-10 gap-2">
        {/* Left Column */}
        <div className="flex-1 p-8 text-left">
          <h1 className="text-5xl font-bold mb-4 text-[#2BAD81] pb-5">
            Security First
          </h1>
          <p className="text-lg mb-4 text-white w-3/4">
            In a digital landscape rife with threats, cybersecurity isn't an
            afterthought it's paramount. We embed security measures into every
            solution we provide, safeguarding your data and your customers'
            trust.
          </p>
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
      <h1 className="text-5xl text-center text-[#487a78] bg-[#151C34] font-bold pt-10">
        Tell us how we can help you
      </h1>
      <ContactForm />
    </div>
  );
};

export default About;
