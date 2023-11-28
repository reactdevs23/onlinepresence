import React, { useState } from "react";
import styles from "./Herosection.module.css";

const Herosection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={["mainWrapper", styles.wrapper].join(" ")}>
      <h2 className={styles.title}>
        We're giving you access to a{" "}
        <span className="highlight">
          MASTERCLASS ON HOW TO BUILD YOUR ONLINE PRESENCE
        </span>{" "}
        INTO AN AUTHORITY
      </h2>
      <p className={styles.text}>
        So you can generate revenue for your agency, coaching offer, course, &
        more
      </p>
      <form action="" onSubmit={submitHandler} className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          name="eamil"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          {" "}
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default Herosection;
