import React, { useEffect, useState } from "react";
import logo from "../image/kodify.png";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = (props) => {

  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  // State for form submission
  const [submitted, setSubmitted] = useState(false);
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate with your backend API
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    // Reset form fields
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className={`w-full h-full relative `}>
      <div className="w-full h-full pt-[4rem] pb-[3rem] ">
        <p
          onClick={() => {
            props.hideContactpage();
          }}
          className={`w-[25px] h-[25px]  ${props.goHomePageButton ? "flex" : "hidden"} [@media(min-width:555px)]:text-[35px] text-[30px] rotate-[45deg] text-center justify-center items-center absolute [@media(min-width:555px)]:top-[1rem] top-[10px] [@media(min-width:555px)]:right-[1rem] right-[13px] cursor-pointer z-20 rounded-[50%]`}
        >
          +
        </p>

        <div className="w-full text-center text-white relative z-10 md:pb-[1rem] pb-[10px]">
          <p className="text-[#03bfff] sm:text-[14px] text-[13px] mx-auto">
            Contact
          </p>
          <h1 className="md:text-[30px] sm:text-[25px] text-[20px] font-bold">
            Get in touch
          </h1>
        </div>
        <div className="mx-auto xl:w-[1230px] w-[96%]  relative z-[1] flex justify-center items-center">
          <div className="flex md:flex-row flex-col justify-center w-full text-white z-10">
            {/* Left Side: Company Information */}
            <div className="w-full lg:w-[40%] md:pr-6 pr-0 grid place-content-center text-white md:text-left text-center mx-auto">
              <img
                src={logo}
                className="[@media(min-width:420px)]:w-[100px] w-[80px] select-none cursor-pointer md:mx-0 mx-auto mb-[10px]"
              />

              <p className="md:mb-6 mb-3 md:text-[15px] text-[14px]">
                Always available for freelance work if the right project comes
                along, Feel free to contact me!
              </p>
              <div className="mb-4">
                <h3 className="text-[17px] font-semibold">
                  Contact Information
                </h3>
                <p className="mt-2 flex items-center text-[15px] md:justify-start justify-center">
                  <FaMapMarkerAlt className="mr-2" size={14} />
                  Rajshahi, Paba 6210, Bangladesh
                </p>
                <p className="mt-2 flex items-center text-[15px] md:justify-start justify-center">
                  <FaPhone className="mr-2" size={14} />
                  +880 173 966 3503
                </p>
                <p className="mt-2 flex items-center text-[15px] md:justify-start justify-center">
                  <FaEnvelope className="mr-2" size={14} />
                  kodify345@gmail.com
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold">Follow Us</h3>
                <div className="flex space-x-4 mt-2 md:justify-start justify-center">
                  <a href="#" className="hover:text-primary transition-[0.3s]">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="hover:text-primary transition-[0.3s]">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="hover:text-primary transition-[0.3s]">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="hover:text-primary transition-[0.3s]">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
            {/* Right Side: Contact Form */}
            <div className="lg:w-[50%] w-[100%] GeologicaFont mx-auto text-center lg:pb-0 pb-[1.5rem]">
              {submitted && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                  Thank you for contacting us! We'll get back to you shortly.
                </div>
              )}
              <form onSubmit={handleSubmit} className="">
                <div className="mb-[12px] pt-[1.5rem] text-left">
                  <label className="relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#98989887] text-white text-sm rounded-lg focus:ring-[#03bfff] focus:border-[#98989887] block w-full p-2.5 dark:!bg-transparent dark:border-[#98989887] placeholder-[#pffffff9c] dark:focus:ring-[#03bfff] dark:focus:border-[#03bfff] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-white text-opacity-80 bg-[#0a012a] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Your Name
                    </span>
                  </label>
                </div>
                <div className="grid gap-3 mb-[12px] md:grid-cols-2 text-left">
                  <label className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#98989887] text-white text-sm rounded-lg focus:ring-[#03bfff] focus:border-[#98989887] block w-full p-2.5 dark:!bg-transparent dark:border-[#98989887] placeholder-[#pffffff9c] dark:focus:ring-[#03bfff] dark:focus:border-[#03bfff] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-white text-opacity-80 bg-[#0a012a] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Email address
                    </span>
                  </label>
                  <label className="relative">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#98989887] text-white text-sm rounded-lg focus:ring-[#03bfff] focus:border-[#98989887] block w-full p-2.5 dark:!bg-transparent dark:border-[#98989887] placeholder-[#pffffff9c] dark:focus:ring-[#03bfff] dark:focus:border-[#03bfff] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-white text-opacity-80 bg-[#0a012a] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Your Phone
                    </span>
                  </label>
                </div>
                <div className="mb-[12px] text-left">
                  <label className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      autoComplete="off"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#98989887] text-white text-sm rounded-lg focus:ring-[#03bfff] focus:border-[#98989887] block w-full p-2.5 dark:!bg-transparent dark:border-[#98989887] placeholder-[#pffffff9c] dark:focus:ring-[#03bfff] dark:focus:border-[#03bfff] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-white text-opacity-80 bg-[#0a012a] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Subject
                    </span>
                  </label>
                </div>
                <div className="mb-[12px] text-left">
                  <label className="relative">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      rows="8 "
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#98989887] text-white text-sm rounded-lg focus:ring-[#03bfff] focus:border-[#98989887] block w-full p-2.5 dark:!bg-transparent dark:border-[#98989887] placeholder-[#pffffff9c] dark:focus:ring-[#03bfff] dark:focus:border-[#03bfff] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-white text-opacity-80 bg-[#0a012a] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Your message
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  value="Submit Now"
                  className="text-[14px] px-[22px] py-[8px] rounded-[50px] hover:!bg-transparent bg-[#03bfff] text-[#fff] hover:text-[#03bfff] border-[2px] border-[#03bfff] transition-[0.4s]"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
