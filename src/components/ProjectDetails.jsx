// ProjectDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { imageNames } from "../constants";
import { web, git, back } from "../assets";
import { useNavigate } from "react-router-dom";
const ProjectDetails = () => {
  const { id } = useParams();
  const image = imageNames.find((img) => img.id === parseInt(id));

  if (!image) {
    console.log("Image not found.");
    return <div>Image not found.</div>;
  }
  const navigate = useNavigate();
  return (
    <div className="flex items-center relative justify-center">
      <div className=" mt-20 max-w-7xl">
        <button
          className="absolute  hidden lg:flex  items-center left-10"
          onClick={() => navigate(-1)}
        >
          <img src={back} />
          <p className="text-lg">Back</p>
        </button>

        <div className="text-4xl relative lg:text-5xl mb-10 lg:mb-20 font-semibold font-poppins">
          <h2>{image.name}</h2>
        </div>
        <div className="flex-row lg:flex  justify-between mb-10 lg:mb-20">
          <div className=" my-7 lg:my-0 text-sm lg:text-xl lg:max-w-lg">
            <p>{image.data}</p>
          </div>
          <div className="flex flex-row justify-around  items-center text-sm lg:text-xl lg:gap-4">
            <img
              src={web}
              alt="web_img"
              className="w-8 h-8 lg:w-10 lg:h-10"
            ></img>
            <div className="flex-col  flex">
              Website
              <a
                href={image.web}
                to="_blank"
                className="cursor-pointer hover:underline"
              >
                Link to Website
              </a>
            </div>
            <img
              src={git}
              alt="web_img"
              className="w-8 h-8 lg:w-10 lg:h-10"
            ></img>
            <div className="flex-col flex">
              Github
              <a className="cursor-pointer hover:underline">Link to Website</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5 mb-32 ">
          {" "}
          {image.images.map((some) => (
            <img key={some.id} src={some.icon} alt={some.name}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
