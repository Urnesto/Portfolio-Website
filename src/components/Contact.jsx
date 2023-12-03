import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { msg } from "../assets";
const Contact = () => {
  const form = useRef();

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [textError, setTextError] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const email = "ernest.rimkevicius@gmail.com";

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.user_name.value) {
      setNameError("Name is required");
      return;
    }
    if (!form.current.user_email.value) {
      setEmailError("Email is required");
      return;
    }
    if (!form.current.message.value) {
      setTextError("Message is required");
      return;
    }

    // If all inputs are valid, clear any previous error messages
    setNameError("");
    setEmailError("");
    setTextError("");

    emailjs
      .sendForm(
        "ernest_portfolio",
        "template_gtsjma8",
        form.current,
        "pz2cn63y7vXLOKOqP"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError("Email sending failed. Please try again.");
        }
      );
  };
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-20 ">
      <div id="contact"></div>
      <div className="lg:w-1/2 space-y-4">
        <motion.div variants={textVariant()} className="m-5">
          <h1 className="text-5xl font-semibold font-poppins my-4">
            {"//Contact"}
          </h1>
          <h4 className="text-french font-poppins">
            Get in touch or shoot me an email directly on{" "}
            <span className="text-white font-poppins font-semibold">
              <a href={`mailto:${email}`}> ernest.rimkevicius@gmail.com</a>
            </span>
          </h4>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="w-full lg:w-1/2"
      >
        <form
          ref={form}
          className="flex flex-col w-full gap-3"
          onSubmit={sendEmail}
        >
          <label className="uppercase">Name</label>
          <input
            className="bg-erieBlack lg:text-lg p-4 h-12 border-b-2 focus:opacity-80"
            type="text"
            name="user_name"
          />
          <span className="text-red-500">{nameError}</span>

          <label className="uppercase">Email</label>
          <input
            className="bg-erieBlack lg:text-lg p-4 h-12 border-b-2"
            type="email"
            name="user_email"
          />
          <span className="text-red-500">{emailError}</span>

          <label className="uppercase">Message</label>
          <textarea
            className="bg-erieBlack lg:text-lg p-4  text-left h-20 border-b-2"
            name="message"
          />
          <span className="text-red-500">{textError}</span>
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
            <div>
              {success ? (
                <div className="text-green-500">Email sent successfully!</div>
              ) : null}
              {error && <div className="text-red-500">{error}</div>}
            </div>
            <div>
              <button
                className="w-full flex flex-row items-center justify-center lg:w-20 h-10 my-2 text-xl text-black bg-white "
                type="submit"
                value="Send"
              >
                Send
                <img className="w-6 h-6 " src={msg} alt="send" />
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
export default SectionWrapper(Contact, "Contact");
