import styles from "../styles/Home.module.css"
import { useEffect, useState } from "react"

function Home() {
  const [city, setCity] = useState("")
  const [temp, setTemp] = useState("")
  const [lat,setLat] = useState("")
  const [lon,setLon] = useState("")
 
  useEffect(() => {
    fetch(`http://localhost:3000/weather`)
      .then((response) => response.json())
      .then((data) => {
        setCity(data.city)
        setTemp(data.temp)
        setLat(data.lat)
        setLon(data.lon)
      })
      .catch((error) => {
        console.error("Erreur du fetch: ", error)
      })
  }, [])

  return (
    
   <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.tempBox}>
          <h3 className={styles.tempTitle}>PRÉVISION CE WEEKEND</h3>
          <h2 className={styles.temp}>{temp}</h2>
        </div>
      </header>

      
        <h1 className={styles.title}>{city}</h1>
   </div>
  );
}

export default Home;
