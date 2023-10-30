import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <main className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>Find your books here</h2>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
          <div className={classes.inputContainer}>
            <input
              type="text"
              className={classes.input}
              placeholder="Search for books"
            />
            <button className={classes.button}>Search</button>
          </div>
        </div>
      </div>
      <div className={classes.imgContainer}>
      <div className={classes.imgWrapper}></div>
      </div>
    </main>
  );
};

export default Hero;
