import React, { useRef } from "react";
import Lottie from "lottie-react";
import contactImg from "@/assets/contact.json";

const Contact = () => {
  const speedRef = useRef();
  return (
    <section className="py-24" id="contact">
      <div className="container  md:w-[90%] lg:w-[80%] mx-auto overflow-hidden">
        <div className="pb-24 text-center">
          <h2 className="relative tracking-wider text-center text-primary after-line after:w-32 md:after:w-[185px] uppercase text-effect">
            Contact
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 border border-primary/10 py-10 rounded-md ">
          {/* TEXT & LOTTIE IMAGE */}
          <div className="w-full md:w-1/2 lg:w-2/5 text-center ">
            <h3 className="text-[36px] lg:text-[42px] text-effect font-semibold text-[#eaf7fb] lg:leading-snug uppercase">
              Let's Work <br /> Together
            </h3>
            <div className="w-full flex justify-center">
              <Lottie
                animationData={contactImg}
                lottieRef={speedRef}
                className="max-w-[300px] "
              />
            </div>
          </div>
          {/* FORM */}
          <form className="w-full md:w-1/2 lg:w-3/5 flex flex-col space-y-5 px-5 lg:pl-16 md:border-l border-primary/40 lg:pr-20">
            <div className="space-y-1">
              <label htmlFor="" className="text-[#eaf7fb] ">
                Name
              </label>
              <input
                className="w-full border-b border-primary/30 pl-3 bg-[#081a24] py-2 text-[#eaf7fb] focus:border-primary  outline-none "
                type="text"
                placeholder="Enter your name"
                name="name"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[#eaf7fb] " htmlFor="">
                Email
              </label>
              <input
                className="w-full border-b border-primary/30 pl-3 bg-[#081a24] py-2 text-[#eaf7fb] focus:border-primary outline-none "
                type="email"
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-[#eaf7fb] ">Message</h3>
              <textarea
                className=" w-full border-b border-primary/30 pl-3 bg-[#081a24] py-2 text-[#eaf7fb] focus:border-primary  outline-none "
                rows="5"
                name="message"
              ></textarea>
            </div>
            <button className="btn ">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
