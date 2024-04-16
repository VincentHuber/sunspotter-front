import React from "react";
import styles from "../styles/Home.module.css";
import { useEffect, useState, useRef } from "react";
import Map from "./Map";
import About from "./About";
import Waiting from "./Waiting";
import Arrow from "../public/arrow";


function Home() {

  //affichage de la map
  const mapRef = useRef();

  //Pour afficher le composant Waiting
   const [showWaiting, setShowWaiting] = useState(false)

  //Pour afficher la modale
  const [showModal, setShowModal] = useState(false)

  //Pour contenir toutes les informations du back
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [text, setText] = useState("");

  //Pour récupérer les informations du back
  useEffect(() => {
    fetch(`https://sunspotter-back.vercel.app/weather`)
      .then((response) => response.json())
      .then((data) => {
        setCity(data.city);
        console.log("city : ", city)
        setTemp(data.temp);
        setImg1(data.img1);
        setImg2(data.img2);
        setImg3(data.img3);
        setText(data.text);
        setShowWaiting(data.showWaiting)
        console.log("showWaiting : ", showWaiting)
      })
      .catch((error) => {
        console.error("Erreur du fetch: ", error);
      });
  }, []);

  return (
    <div className={styles.container}>

     {showWaiting && <Waiting/>}
     
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
