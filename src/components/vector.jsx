import { ernest } from "../assets";
import { ImageWrapper } from "../hoc";
import "./a.css";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
const Vector = ({ index }) => {
  const word = "Front-End Developer";

  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.9 * index, 3)}
      className="w-full h-full  "
    >
      <div className=" my-32 ">
        <div className=" font-poppins flex items-center lg:flex-row flex-col-reverse ">
          <div className=" text-3xl lg:text-6xl  font-semibold">
            <h1 className="w-full">
              <h2 className=" text-2xl lg:text-4xl flex hoverable-letter">
                Hi I`m Ernest{" "}
              </h2>
              {word.split("").map((letter, index) => (
                <span key={index} className=" hoverable-letter">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
            <h3 className=" lg:my-10 font-normal text-lg">
              I enjoy working on the front-end of the web. This is my portfolio
              site where you can find information about me and my projects.
            </h3>
          </div>
          <div className="lg:max-w-lg w-full h-full">
            <img src={ernest} alt="img" className=" w-full h-full"></img>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageWrapper(Vector, "vector");
