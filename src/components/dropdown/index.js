import React from "react";
import styles from "./index.module.css";

const Dropdown = ({ id, options, labelText, value, handleDropdownChange }) => {
  return (
    <div className={styles.dropdown}>
      {labelText && (
        <label htmlFor={id} className={styles.label}>
          {labelText}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => handleDropdownChange(e.target.value)}
        className={styles.dropdownList}
      >
        {options?.map((option, index) => (
          <option
            className={styles.selectOption}
            key={index}
            id={option.id}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
