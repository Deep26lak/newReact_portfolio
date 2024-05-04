import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/Deep26lak" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https:/www.x.com/i_deep_26" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
      <a
        href="https://www.instagram.com/i_deep_26/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/i-deep/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default SocialMedia;
