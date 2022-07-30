import React from 'react'
import styles from "./Filter.module.css"
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({
  pageNumber,
  setPageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {

  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className={styles.header}> Filters </div>
      <div
      className={styles.clearFilter}
      onClick={clear}
      > Clear Filters</div>

      <div className={`${styles.accordion} accordion`} id="accordionExample"> 
      <Status
          setPageNumber={setPageNumber}
          updateStatus={updateStatus}
        />
        <Species
          setPageNumber={setPageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          setPageNumber={setPageNumber}
          updateGender={updateGender}
        />
      </div>
    </div>
  )
}

export default Filters