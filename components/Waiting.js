import React, { useEffect, useState } from "react";
import styles from "../styles/Waiting.module.css";

export default function Waiting() {
  const [dayLeft, setDayLeft] = useState("");

  //Pour déterminer la date du jour
  const today = new Date();
  const dayOfWeek = today.getDay();

  useEffect(() => {
    setDayLeft(3 - dayOfWeek);
  }, []);

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>J-{dayLeft}</h1>

      <p className={styles.explication}>
        Chaque mercredi, Sunspotter repère la destination la plus ensoleillée de
        France afin de te recommander une destination pour le weekend à venir. À
        mercredi !
      </p>

    {/* IMAGES EN HAUT */}
      <div className={styles.containerImageUp}>
        <img
          src="/waiting/img3.png"
          alt="image de fond"
          width={437}
          height={220}
          className={styles.imageUpLeft}
        />
        <img
          src="/waiting/img1.png"
          alt="image de fond"
          width={310}
          height={150}
          className={styles.imageUpMiddle}
        />
        <img
          src="/waiting/img7.png"
          alt="image de fond"
          width={399}
          height={150}
          className={styles.imageUpRight}
        />
      </div>

    {/* IMAGES AU MILIEU */}
      <div className={styles.containerImageMiddle}>
      <img
          src="/waiting/img8.png"
          alt="image de fond"
          width={90}
          height={220}
          className={styles.imageMiddleLeft}
        />
        <img
          src="/waiting/img5.png"
          alt="image de fond"
          width={498}
          height={300}
          className={styles.imageMiddleMiddle}
        />
        <img
          src="/waiting/img2.png"
          alt="image de fond"
          width={378}
          height={500}
          className={styles.imageMiddleRight}
        />
      </div>

    {/* IMAGES EN BAS */}
      <div className={styles.containerImageDown}>
      <img
          src="/waiting/img6.png"
          alt="image de fond"
          width={454}
          height={346}
          className={styles.imageDownLeft}
        />
        <img
          src="/waiting/img4.png"
          alt="image de fond"
          width={346}
          height={346}
          className={styles.imageDownMiddle}
        />
      </div>

      <div className={styles.overlay}></div>
      <div className={styles.background}></div>
    </div>
  );
}
