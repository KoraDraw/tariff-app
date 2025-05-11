import React from "react";
import styles from "./Tariff.module.css";

const CardTariff = ({ details, highlight }) => {
  const { name, price, speed, limit } = details;

  const cardClass = highlight ? styles.red : styles[details.color];

  return (
    <div className={`${styles.card} ${cardClass}`}>
      <div className={styles.tariffName}>{name}</div>
      <div className={styles.tariffPrice}>{price}</div>
      <div className={styles.tarifSpeed}>{speed} </div>
      <div className={styles.limitSpeed}>{limit}</div>
    </div>
  );
};

export default CardTariff;
