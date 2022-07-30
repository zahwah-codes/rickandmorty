import React from 'react'
import styles from "../Filter.module.css"
import FilterBTN from '../FilterBTN';

const Gender = ({ updateGender, setPageNumber }) => {
  let genders = ["Female", "Male", "Genderless", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
          style = {{filter: "grayscale(1)"}}
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => {
            return (
              <FilterBTN
                name="gender"
                index={index}
                key={index}
                setPageNumber={setPageNumber}
                task={updateGender}
                input={items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default Gender