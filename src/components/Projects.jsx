import { motion } from "framer-motion";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ImageWrapper } from "../hoc";
import { Link } from "react-router-dom";
const ProjectCard = ({ index, title, subtitle, text, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 3)}
      className="w-full h-full flex items-center group p-px rounded-2xl "
    >
      <div className="">
        <img
          src={icon}
          alt={title}
          className="w-full h-full transition-transform transform  scale-95 hover:scale-100 inset-0 z-0 "
        />

        <div className="w-full h-18  flex flex-col items-start p-3 bg-darkGray">
          <h2 className="text-xl font-semibold">{title}</h2>

          <div className="opacity-0 transition ease-in-out duration-700 group-hover:opacity-100 ">
            <p className="text-white text-xl">Show project</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="mt-16">
      <motion.div variants={textVariant()}>
        <h1 className="text-6xl font-semibold text-center font-poppins tracking-wide">
          Projects
        </h1>
      </motion.div>

      <div className="mt-16 grid lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`text-center ${
              index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <Link to={`/image-names/${project.id}`}>
              <ProjectCard index={index} {...project} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageWrapper(Projects, "Projects");
