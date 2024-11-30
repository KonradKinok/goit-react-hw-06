import React from "react";
import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid'
import {setStatusFilter} from "../redux/filtersSlice"
import scss from "./Filter.module.scss"

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.value;
    dispatch(setStatusFilter(filter))
  };  
  
  const searchId = nanoid();
    return (
      <div className={scss.containerFilter}>
        <label htmlFor={searchId}>Find contact</label>
        <input
          type="text"
          id={searchId}
          name="filter"
          onChange={handleFilterChange}
        />
      </div>
    );
}

export default Filter;