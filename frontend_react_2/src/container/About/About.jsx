import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./about.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const quary = '*[_type == "abouts"]';
    client.fetch(quary).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h1 className="head-text" style={{ marginTop: 30 }}>
        I know that <span> Good Development</span> <br /> means
        <span> Good business</span>
      </h1>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, type: "tween" }}
            className="app_profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h3 className="bolt-text" style={{ marginTop: 20 }}>
              {about.title}
            </h3>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
