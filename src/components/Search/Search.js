import React from 'react'
import styles from './Search.module.css'

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <div className={styles.container}>

        <h1 className="d-flex justify-content-center"> Characters </h1>
        <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
            <input
            onChange={e=>{
                setPageNumber(1);
                setSearch(e.target.value);
            }}
            placeholder="Search for Characters"
            type="text"
            className={styles.input}
            />

        <button onClick ={(e) => {
            e.preventDefault();
        }}
        className={styles.btn}> Search </button>
        </form>
    </div>
)}

export default Search