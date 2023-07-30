import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const FilterContact = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      type name of person u lookin' for:
      <input 
        type="text"
        value={filter}
        onChange={handleChange} 
      />
    </label>
  );
};

FilterContact.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
