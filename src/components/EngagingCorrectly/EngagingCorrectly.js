import React from "react";
import styles from "./styles.module.css";
import { contentCreation } from "../../images";
import SignupLearnmore from "../SignupLearnmore/SignupLearnmore";

const EngagingCorrectly = () => {
  const data = [
    {
      heading: "Crafting Compelling Tweets",
      info: " Learn the secrets to creating tweets that not only capture attention but also drive engagement and growth.",
    },
    {
      heading: "Crafting Compelling Tweets",
      info: " Learn the secrets to creating tweets that not only capture attention but also drive engagement and growth.",
    },
    {
      heading: "Crafting Compelling Tweets",
      info: " Learn the secrets to creating tweets that not only capture attention but also drive engagement and growth.",
    },
  ];
  return (
    <section className={styles.wrapper}>
      <div className={styles.frame}>
        <img src={contentCreation} alt="#" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>
          ENGAGING <br />
          <span className="highlight">CORRECTLY</span>{" "}
        </h3>
        <ul className={styles.ul}>
          {data.map((el, i) => (
            <div className={styles.infoContainer} key={i}>
              <span className={styles.circle}></span>
              <li className={styles.info}>
                <strong className={styles.infoHeading}>{el.heading}:</strong>
                {el.info}
              </li>
            </div>
          ))}
        </ul>
        <SignupLearnmore />
      </div>
    </section>
  );
};

export default EngagingCorrectly;
