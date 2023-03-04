import styles from "./Search.module.scss";
import IconExpand from "../assets/expand_more.svg";

import { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const inputChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div className={styles.search_container}>
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={inputChangeHandler}
      />
      <button className={`${styles.dropdown} btn-normal`}>
        All category <img src={IconExpand} />
      </button>
      <button className={`${styles.cta} btn-normal`}>Search</button>
    </div>
  );
};

export default Search;
