import React from "react";
import styles from "../styles/Home.module.css";
import { useEffect, useState, useRef } from "react";
import Map from "./Map";
import About from "./About";
import Arrow from "../public/arrow";


function Home() {
  const mapRef = useRef();

  const [showModal, setShowModal] = useState(false)

  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/weather`)
      .then((response) => response.json())
      .then((data) => {
        setCity(data.city);
        setTemp(data.temp);
        setLat(data.lat);
        setLon(data.lon);
        setImg1(data.img1);
        setImg2(data.img2);
        setImg3(data.img3);
        setText(data.text);
      })
      .catch((error) => {
        console.error("Erreur du fetch: ", error);
      });
  }, []);

  return (
    <div className={styles.container}>
     {showModal && <About setShowModal={setShowModal}/>}
      <p className={styles.logo}>SUNSPOTTER</p>
      <main className={styles.main}>
        <header className={styles.header}>
          <img
            src={img1}
            alt={city}
            width={358}
            height={180}
            className={styles.imageUp}
          />

          <div className={styles.headerRight}>
            <div className={styles.buttonBox}>
              <button className={styles.buttonMenu}>Home</button>
              <button onClick={()=> setShowModal(true)}
                className={styles.buttonMenu}
              >
                À propos
              </button>
            
            </div>
            <div className={styles.tempBox}>
              <h3 className={styles.tempTitle}>PRÉVISIONS DU WEEKEND</h3>
              <h2 className={styles.temp}>{temp}°</h2>
            </div>
          </div>
        </header>

        <content className={styles.content}>
          <div className={styles.info}>
            <h1 className={styles.title}>CE WEEKEND, DIRECTION</h1>
            <h1 className={styles.titleCity}>{city}</h1>
            <p className={styles.text}>{text}</p>
            <button
              onClick={() => {
                mapRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className={styles.buttonItinerary}
            >
              <Arrow />
              <p>Voir la carte</p>
            </button>
          </div>
          <div className={styles.containerImageRight}>
            <img
              src={img3}
              alt={city}
              width={380}
              height={503}
              className={styles.imageRight}
            />
          </div>
        </content>

        <div className={styles.containerImageDown}>
          <img
            src={img2}
            alt={city}
            width={350}
            height={200}
            className={styles.imageDown}
          />
        </div>
      </main>
      <div ref={mapRef}>
        <Map city={city} />
      </div>
    </div>
  );
}

export default Home;
