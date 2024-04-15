import React, { useEffect, useState } from 'react'
import styles from "../styles/Waiting.module.css";

export default function Waiting() {

    const [dayLeft, setDayLeft]=useState("")

   //Pour déterminer la date du jour
   const today = new Date();
   const dayOfWeek = today.getDay();

    useEffect(()=>{
        setDayLeft(3-dayOfWeek)
    },[])


  return (
    <div className={styles.content}>

        <h1 className={styles.title}>
            J-{dayLeft}
        </h1>

        <p className={styles.explication}>
        Chaque mercredi, Sunspotter repère 
        la destination la plus ensoleillée de 
        France afin de te recommander une destination 
        pour le weekend à venir. À mercredi !
        </p>

        <div className={styles.overlay}></div>

    </div>
  )
}
