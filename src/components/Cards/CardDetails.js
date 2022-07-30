import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'
import styles from "./Card.module.css";

const CardDetails = () => {

    let { id } = useParams();

    let [fetchedData, updateFetchedData] = useState([]);
    let { name, location, origin, gender, image, status, species } = fetchedData;
  
    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          updateFetchedData(data);
        })();
      }, [api]);    
    
      return (
        <div className="container d-flex justify-content-center mt-5 mb-5">
          <div className="d-flex flex-column gap-3">
            <h1 className="text-center">{name}</h1>
    
            <img className={styles.card} src={image} alt="" />
            {(() => {
              if (status === "Dead") {
                return <div className={`${styles.badgeText} badge fs-5`} style={{backgroundColor: "#FF0000", width: '80%', position: 'relative', left: '10%', marginTop: '20px', color:'black'}} >{status}</div>;
              } else if (status === "Alive") {
                return <div className={`${styles.badgeText} badge fs-5`} style={{backgroundColor: "#00FF0A", width: '80%', position: 'relative', left: '10%', marginTop: '20px', color:'black'}} >{status}</div>;
              } else {
                return <div className={`${styles.badgeText} badge fs-5`} style={{backgroundColor: "#FFA800", width: '80%', position: 'relative', left: '10%', marginTop: '20px', color:'black'}} >{status}</div>;
              }
            })()}
            <div className="content mt-4">
              <div className={styles.infoCard}>
                <span className={styles.infoTitle}>Gender : </span>
                {gender}
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoTitle}>Location: </span>
                {location?.name}
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoTitle}>Origin: </span>
                {origin?.name}
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoTitle}>Species: </span>
                {species}
              </div>
            </div>
          </div>
        </div>
      );
    };

export default CardDetails