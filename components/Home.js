import React from "react";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Map from "./Map";
import Arrow from "../public/arrow"

function Home() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/weather`)
      .then((response) => response.json())
      .then((data) => {
        setCity(data.city);
        setTemp(data.temp);
        setLat(data.lat);
        setLon(data.lon);
      })
      .catch((error) => {
        console.error("Erreur du fetch: ", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.header}>
          <Image
            src="/mari1.png"
            alt="Marignane"
            width={398}
            height={200}
            className={styles.imageUp}
          />

          <div className={styles.headerRight}>
            <div className={styles.buttonBox}>
              <button className={styles.buttonMenu}>Home</button>
              <button className={styles.buttonMenu}>À propos</button>
            </div>
            <div className={styles.tempBox}>
              <h3 className={styles.tempTitle}>PRÉVISIONS DU WEEKEND</h3>
              <h2 className={styles.temp}>35°</h2>
            </div>
          </div>
        </header>

        <content className={styles.content}>
          <div className={styles.info}>
            <h1 className={styles.title}>CE WEEKEND, DIRECTION</h1>
            <h1 className={styles.titleCity}>MARIGNANE</h1>
            <p className={styles.text}>
              Nichée entre mer et collines, cette ville provençale offre un
              mélange de tradition et de modernité. Flânez dans son centre
              historique où les ruelles étroites vous invitent à savourer des
              spécialités locales dans ses cafés animés.
            </p>
            <button className={styles.buttonItinerary}>
              <Arrow/>
              <p>Voir l'itinéraire</p>
            </button>
            
          </div>
          <div>
            <Image
              src="/mari3.png"
              alt="Marignane"
              width={380}
              height={503}
              className={styles.imageRight}
            />
          </div>
        </content>

        <div className={styles.containerImageDown}>
          <Image
                src="/mari2.png"
                alt="Marignane"
                width={350}
                height={237}
                className={styles.imageDown}
              />
        </div>
      </main>
      < Map/>
    </div>
  );
}

export default Home;
