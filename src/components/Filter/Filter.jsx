import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filterText, handleFilter }) => {
    return (
      <>
        <label >
          Find contacts by name
          <input
            type="text"
            value={filterText}
            onChange={handleFilter}
          />
        </label>
      </>
    );
  };
  
  Filter.propTypes = {
    filterText: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
  };
  
  export default Filter;