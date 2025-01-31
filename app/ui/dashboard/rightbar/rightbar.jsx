import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}> &#128293;Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard
          </h3>
          <span className={styles.subtitle}>Takes 4 mintues to learn</span>
          <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
            {/* Reprehenderit eius libero perspiciatis recusandae possimus. */}
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled /> Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}> &#128640; Coming Soon</span>
          <h3 className={styles.title}>
           New server actions are available partial pree-rendering is coming up!
          </h3>
          <span className={styles.subtitle}>Takes 4 mintues to learn</span>
          <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
            {/* Reprehenderit eius libero perspiciatis recusandae possimus. */}
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
