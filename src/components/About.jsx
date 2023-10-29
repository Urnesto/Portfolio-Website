import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, subtitle, text, icon }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
      {" "}
      <div className="bg-jetLight  rounded-2xl flex items-center px-3 pt-2  flex-col">
        <div className="flex flex-row  items-center">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 flex  object-contain"
          />
        </div>
        <p className="text-lg">{title}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div id="about" className=" flex items-center flex-col">
      <motion.div variants={textVariant()}>
        <div className="space-y-6 max-w-3xl font-semibold font-poppins ">
          <h1 className="text-6xl font-semibold text-center  tracking-wide ">
            Skills
          </h1>
          <p className="text-center text-lg">
            The main area of expertise is front end development (client side of
            the web).
          </p>
          <p className="text-center text-lg">
            {" "}
            HTML, CSS, JS, building small and medium web applications with Vue
            or React, custom plugins, features, animations, and coding
            interactive layouts.
          </p>
          <p className="text-lg  text-center">
            Visit my{" "}
            <a
              className="text-flashPurple hover:underline"
              target="blank"
              href="https://www.linkedin.com/in/ernest-rimkievicius-0785a521a/"
            >
              Linkedin
            </a>{" "}
            for more details
          </p>
        </div>
      </motion.div>

      <div className="mt-16 flex flex-wrap flex-row items-center justify-center gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "About");
