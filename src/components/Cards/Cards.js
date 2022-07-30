import React from 'react'
import styles from "./Card.module.css";
import gif from "./johntravolta.gif"
import { Link } from 'react-router-dom'

const Cards = ({ results, page}) => {
    
    let display; 
    
    console.log(results);

    if(results) {
       display = results.map( x => {
        let { id, name, image, status, location } = x
        return (
            <Link
            to={`${page}${id}`}
            key={id}
            style={{color: 'black', textDecoration: 'none'}}
            className="col-lg-4 col-md-6 col-12 position-relative">
                <div className={`${styles.card} d-flex flex-column justify-content-center`}>
                    <img src={image} alt="" className={`${styles.img} img-fluid`} />
                    <div className={styles.content}>
                        <div className={styles.title}>{name}</div>
                    <div className="">
                        <div className={styles.location}>Last Location</div>
                        <div className={styles.locationName}>{location.name}</div>
                    </div>
                    </div>
                </div>

                {(() => {
                    if (status === "Dead") {
                    return (
                        <div
                        className={styles.badge} style={{backgroundColor: "#FF0000"}}
                        >
                        {status}
                        </div>
                    );
                    } else if (status === "Alive") {
                    return (
                        <div
                        className={styles.badge} style={{backgroundColor: "#00FF0A"}}
                        >
                        {status}
                        </div>
                    );
                    } else {
                    return (
                        <div
                        className={styles.badge} style={{backgroundColor: "#FFA800"}}
                        >
                        {status}
                        </div>
                    );
                    }
                })()}
            </Link>
            )
       });
    } else {
        display = <img src={gif} alt="loading..." className={styles.gif} />
    }

    return <>{display}</>
}
export default Cards