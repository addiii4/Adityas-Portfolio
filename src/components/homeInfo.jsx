import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Adi</span> 👋
      <br />A Software Engineer located in Brisbane
    </h1>
  ),
  2: (
    <InfoBox
      text="I have worked with many companies and picked a lot of skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Worked on many projects to enhance my skills and knowledge"
      link="/projects"
      btnText="Visit my Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few clicks away"
      link="/contact"
      btnText="Let's connect!"
    />
  ),
};

const homeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default homeInfo;
