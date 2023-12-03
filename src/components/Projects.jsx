import { motion } from "framer-motion";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { git } from "../assets";
import { ImageWrapper } from "../hoc";
const ProjectCard = ({ index, title, data, tags, web, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.1)}
      className="w-full h-full flex items-center group p-px rounded-2xl "
    >
      <div className="flex flex-col gap-10">
        <div className="rounded-[30px] bg-black flex flex-col md:flex-row justify-between gap-6 px-8 py-9 max-w-6xl mx-auto w-full">
          <div className="rounded-2xl border border-slate-50 overflow-hidden aspect-video min-w-[50%] flex items-center justify-center">
            <img
              src={icon}
              alt={title}
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5  min-w-[45%] min-h-[200px]">
            <div className="flex flex-row justify-between">
              <p className="text-xl">{title}</p>
              <img src={git} width={25} height={25} alt="git" />
            </div>
            <div className="flex flex-row flex-wrap gap-3 my-3">
              {tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="flex justify-center items-center rounded-full w-fit p-3 h-6 font-normal text-sm bg-gray-500"
                >
                  {tag}
                </div>
              ))}
              <div>
                <p className="text-base flex-wrap flex">{data}</p>
              </div>
            </div>

            <div>
              <a
                target="_blank"
                href={web}
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-white
               transition-color cursor-pointer focus-visible:ring-2 focus-visible:ring-slate-300
               disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300 font-inter bg-flashWhite
                 hover:bg-flashWhite/80 text-slate-900 h-10 px-4 py-2 w-full"
              >
                Look at
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-slate-50 md:w-[95%] mx-auto h-max rounded-[56px] p-6 md:p-10"
    >
      <motion.div variants={textVariant()}>
        <h1 className="lg:text-5xl text-4xl font-semibold text-center font-poppins tracking-wide text-black">
          {"//Projects"}
        </h1>
      </motion.div>
      <div className="mt-16 flex flex-col gap-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`text-center ${
              index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageWrapper(Projects, "Projects");
