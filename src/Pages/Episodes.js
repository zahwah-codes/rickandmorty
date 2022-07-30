import React, { useEffect, useState } from 'react'
import styles from "./Pages.module.css"
import Cards from '../components/Cards/Cards'
import InputGroup from "../components/Filters/Category/InputGroup"

const Episodes = () => {

    let [id, setID] = useState(1);
    let [results, setResults] = useState([]);
    let [info, setInfo] = useState([]);
    let { air_date, episode, name } = info;
    let api = `https://rickandmortyapi.com/api/episode/${id}`;


    useEffect(()=> {
        (async function(){
            let data = await fetch(api).then(res=>res.json())
            setInfo(data)

            let a = await Promise.all(
                data.characters.map((x)=> {
                    return fetch(x).then(res=> res.json());
                })
            )
            setResults(a);
        })()
    }, [api]);


  return (
    <div className="container">
        <div className="row mb-5">
            <h1 className={`${styles.episode}text-center mb-3 mt-5`}>
            Episode : { " "}
            <span className={styles.episodeName}> {name === ""? "Unknown" : name} </span>
            </h1>
            <h5 className={`${styles.airDate} text-center`}> Air Date : {" "}
             {air_date === ""? "Unknown" : air_date} </h5>
        </div>
        <div className="row">
            <div className="col-lg-3 cl-12">
                <h4 className={`${styles.pickEpisode} text-center mb-4`}> Pick Episode </h4>
                <InputGroup name="Episode" changeID={setID} total={51} />
            </div>
            <div className="col-lg-8 col-12">
                <div className="row"> 
                    <Cards page="/episodes/" results={results}/>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Episodes