import React, { useEffect, useState } from 'react'
import styles from "./Pages.module.css"
import Cards from '../components/Cards/Cards'
import InputGroup from "../components/Filters/Category/InputGroup"

const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className={`${styles.location}text-center mb-3 mt-5`}>
          Location :
          <span className={styles.locationName}>
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className={`${styles.dimension} text-center`}>
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className={`${styles.locationType} text-center mt-3`}>Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className={`${styles.pickLocation} text-center mb-4`}>Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;