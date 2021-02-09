import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <>
      <img
        src="https://avatars.githubusercontent.com/u/69422191?s=460&u=05954cff7060023b13bee86f7690a44f4ba99d6e&v=4"
        alt=""
        className={style.img}
      />
      <div className={style.content}>
        <h1>Beoning - Junior Front End Developer</h1>
        <p className={style.p}>
          I`m Beoning.
          <br /> My goal is to become a Senior FullStack Developer / Team Leader
          as quickly as possible <br /> with an understanding of the most
          important aspects of development for further implementation of my own
          ideas
        </p>
      </div>
    </>
  );
};

export default About;
