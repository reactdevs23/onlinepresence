import React from "react";
import styles from "./styles.module.css";

const SignupLearnmore = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>Signup</button>
      <button className={[styles.button, styles.learnMore].join(" ")}>
        Learn More
      </button>
    </div>
  );
};

export default SignupLearnmore;
