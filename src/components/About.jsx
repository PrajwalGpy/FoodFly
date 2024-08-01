import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import burgerImage from "../Images/burgerImage.png";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="my-28">
      <div className="flex flex-col md:flex md:flex-row gap-1 justify-between">
        <div className="flex items-start flex-col gap-3 justify-center">
          <h1 className="text-2xl font-extrabold m-2">
            Welcome to <br /> The world of <br />
            <span className="bg-orange-500 text-white rounded-lg p-1 ">
              Tasty & Fresh Food
            </span>
          </h1>
          <h4 className="text-base font-medium m-2  ">
            "Better you will feel if you eat a Food<span>Fire</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={burgerImage} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
