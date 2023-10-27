import React, { useState } from "react";


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    const response = await fetch("https://formspree.io/f/xknlyykn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Form submitted successfully");
      // Clear the form
      setFormData({ name: "", email: "", message: "" });
    } else {
      console.error("Form submission failed");
    }
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center py-10 bg-[#151C34]">
      <form
        className="md:w-3/5 w-4/5 p-8 rounded-lg text-left bg-[#2C2946] text-white"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-[#4682a9]">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-2 px-3 mt-1 bg-[#151C34] rounded-md focus:outline-none focus:ring focus:ring-[#3E6866]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-[#4682a9]">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-2 px-3 mt-1 bg-[#151C34] rounded-md focus:outline-none focus:ring focus:ring-[#3E6866]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium text-[#4682a9]">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full py-2 px-3 mt-1 bg-[#151C34] rounded-md focus:outline-none focus:ring focus:ring-[#3E6866] resize-none h-40"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#4682a9] hover:bg-[#5796c0] text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
