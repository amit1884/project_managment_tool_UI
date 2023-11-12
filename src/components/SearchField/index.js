import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./searchField.module.scss";
function SearchField({ value, onChange, placeholder = "Type here" }) {
  return (
    <div
      className={`${styles.searchFieldContainer} ${
        value?.length > 0 ? "active-field" : ""
      }`}
    >
      <span className={styles.searchIcon}>
        <FaSearch />
      </span>
      <input
        className={styles.searchInput}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchField;
