import React from "react";
import styles from "../styles/About.module.css";
import Close from "../public/close";

export default function About({setShowModal}) {

    const handleClick = () => {
       setShowModal(false)
      };

  return (
    <div className={styles.content}>

      <div>
        <button className={styles.buttonClose}  onClick={() => handleClick()}>
          <Close />
        </button>

        <p className={styles.explication}>
          Découvre Sunspotter, ton application météo pour trouver ton prochain
          weekend. Grâce à ses données météorologiques précises, Sunspotter te
          guide vers les rayons du soleil.
        </p>

        <p className={styles.legende}>
          Disponible à partir du mercredi, trois jours avant le weekend, notre
          application te garantit ainsi des prévisions météo fiables.
        </p>
      </div>

      <div onClick={() => handleClick()} className={styles.overlay}></div>

    </div>
  );
}
