import React from "react";
import PropTypes from "prop-types";

const Filter = ({filter, onChangeFilter}) => (
    <input
    type="text"
    value={filter}
    onChange={event => onChangeFilter(event.target.value)}
    placeholder="Search contacts"
    />
);

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;