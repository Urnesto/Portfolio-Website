import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { experience } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  id,
  position,
  name,
  date,
  index,
  tags,
  description,
  icon,
  handleOpen,
  isOpen,
}) => {
  const toggleOpen = () => {
    handleOpen(id);
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      onClick={toggleOpen}
    >
      <div className="flex  items-center rounded-md p-2 justify-between w-full h-16 bg-flashPurple">
        <div className="flex text-xs lg:text-lg font-semibold flex-row">
          <p>{position}</p>
          &nbsp;<span>||</span> &nbsp;
          <p>{name}</p>
        </div>
        <div className="text-xs lg:text-lg ">{date}</div>
      </div>
      {isOpen ? (
        <div className="my-4 w-full h-fit rounded-md p-7 bg-darkPurple">
          <div className="flex-col items-center lg:flex-row-reverse flex">
            <div className="float-left w-32 lg:w-56 my-3 lg:my-0 mx-1">
              {" "}
              <img src={icon} alt={name}></img>
            </div>
            <div className="lg:col-span-4">
              {description.map((des) => (
                <ul key={des.id} className="list-disc ">
                  <li>{des.name}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="flex-row flex-wrap flex my-3 gap-3">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center justify-center rounded-full w-fit p-3 h-8 font-normal text-sm bg-flashBlue"
              >
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </motion.div>
  );
};

const Experience = () => {
  const [openElements, setOpenElements] = useState([]);

  const handleOpen = (id) => {
    if (openElements.includes(id)) {
      // Close the element if it's already open
      setOpenElements(openElements.filter((elementId) => elementId !== id));
    } else {
      // Open the element and close all others
      setOpenElements([id]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div variants={textVariant()}>
        <div className="max-w-md">
          <h1 className="text-4xl lg:text-5xl text-center font-poppins font-semibold">
            {"//Professional Experience"}
          </h1>
        </div>
      </motion.div>

      <div className="w-full flex items-center justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-center text-[18px] max-w-5xl leading-[30px]"
        ></motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex w-full lg:w-8/12 flex-col"
      >
        <div className="mt-[50px] flex flex-col min-h-[40vh] gap-3">
          {experience.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              handleOpen={handleOpen}
              isOpen={openElements.includes(project.id)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
