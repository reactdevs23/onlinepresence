import React from "react";
import styles from "./GetFreeAccess.module.css";
const GetFreeAccess = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        Get <span className="highlight">Free</span> Access...
      </h2>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Signup</button>
        <button className={[styles.button, styles.learnMore].join(" ")}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default GetFreeAccess;
