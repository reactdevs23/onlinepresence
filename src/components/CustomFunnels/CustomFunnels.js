import React from "react";
import { contentCreation } from "../../images";
import SignupLearnmore from "../SignupLearnmore/SignupLearnmore";
import styles from "./styles.module.css";

const CustomFunnels = () => {
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
      <div className={styles.textContainer}>
        <h3 className={styles.title}>
          CUSTOM <br />
          <span className="highlight"> FUNNELS</span>{" "}
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
      <div className={styles.frame}>
        <img src={contentCreation} alt="#" className={styles.image} />
      </div>
    </section>
  );
};

export default CustomFunnels;
