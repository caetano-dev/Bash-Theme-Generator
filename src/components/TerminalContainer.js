import React from "react";
import styles from "../styles/TerminalContainer.module.css";
import TerminalText from "./TerminalText";
import "../styles/Global.css";
import Values from "values.js";

//The different colors are generated using the color variable

const color = new Values("#000");

//todo: maybe a hex generator for the colors
//      or manually create them.

//This only changes the shade of the color (10)
const newColor1 = `rgb(${color.tint(10).rgb})`;

function TerminalContainer() {
  return (
    <div className={styles.container}>
      <TerminalText
        titleColor={{
          color: newColor1,
        }}
      />
    </div>
  );
}

export default TerminalContainer;
