import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.wrapper}>
      <img
        src="https://avatars.githubusercontent.com/u/69422191?s=460&u=05954cff7060023b13bee86f7690a44f4ba99d6e&v=4"
        alt=""
      />
      <div className={style.content}>
        <h1>Beoning - Junior Front End Developer</h1>
        <p>
          Hi, I'm Daniil. A 21 y.o. Junior self-taught developer.
          <br />
          <br /> My goal is to become a Senior Full-Stack Developer, then a Team
          Leader for a complete understanding of all stages of the development
          process to use this knowledge in the future for my own projects.
          <br />
          <br /> So, as you can see, I'm a very ambitious guy 🏆
        </p>
      </div>
    </div>
  );
};

export default About;
