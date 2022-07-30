import React from 'react'

const FilterBTN = ({ input, task, setPageNumber, index, name }) => {
    return (
      <div>
        <style jsx="true">
          {`
            .x:checked + label {
              background-color: black;
              color: white;
            }
            input[type="radio"] {
              display: none;
            }
          `}
        </style>
  
        <div className="form-check">
          <input
            className="form-check-input x"
            type="radio"
            name={name}
            id={`${name}-${index}`}
          />
          <label
            onClick={(x) => {
              task(input);
              setPageNumber(1);
            }}
            className="btn btn-outline-dark"
            for={`${name}-${index}`}
          >
            {input}
          </label>
        </div>
      </div>
    );
  };

export default FilterBTN