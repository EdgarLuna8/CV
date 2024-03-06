import React from "react";
import styles from "./about.module.css";

const GithubBtn = () => {
  return (
    <button className={styles.button} data-text="Awesome">
      <span class="actual-text">&nbsp;uiverse&nbsp;</span>
      <span aria-hidden="true" class="hover-text">
        &nbsp;uiverse&nbsp;
      </span>
    </button>
  );
};

export default GithubBtn;
