import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.content}>
      <h1 className={style.h1}>
        <div className={style.h1Container}>
          Beoning
          <br />
          - Junior <br />
          Front End Developer
        </div>
      </h1>
      <p className={style.p}>
        I`m Beoning.
        <br /> My goal is to become a Senior FullStack Developer / Team Leader
        as quickly as possible <br /> with an understanding of the most
        important aspects of development for further implementation of my own
        ideas
      </p>
    </div>
  );
};

export default About;
