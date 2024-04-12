import styles from "../styles/Map.module.css";

function Map(props) {
  return (
    <div className={styles.content}>
      <iframe
        className={styles.map}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAw0IfFrRnoLsktYUItRy9oTpqQOgMgEwM&q=${props.city}&zoom=12&maptype=roadmap`}
      ></iframe>
    </div>
  )
}

export default Map
