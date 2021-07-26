import React from "react";
import styles from "../styles/TerminalText.module.css";
import "../styles/Global.css";

function TerminalText({ titleColor }) {
  return (
    <div className={styles.container}>
      <p style={titleColor}>text</p>
    </div>
  );
}

export default TerminalText;
