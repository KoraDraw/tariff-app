import React from "react";
import styles from "./TariffComponent/Tariff.module.css";

const CardTariff = ({ details, highlight, onSelect }) => {
  const { name, price, speed, limit, colorScheme } = details;

  // Формируем класс на основе colorScheme и highlight
  const cardClass = `${styles.card} ${styles[colorScheme]} ${
    highlight ? styles.highlight : ""
  }`;

  return (
    <div className={cardClass} onClick={onSelect} style={{ cursor: "pointer" }}>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{price}</div>
      <div className={styles.speed}>{speed}</div>
      <div className={styles.limit}>{limit}</div>
    </div>
  );
};

export default CardTariff;
