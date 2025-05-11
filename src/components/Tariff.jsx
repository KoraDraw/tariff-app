import React from "react";
import CardTariff from "./CardTariff";
import TariffList from "./TariffList";
import styles from "./Tariff.module.css";

const Tariff = () => {
  return (
    <div className={styles.cardContainer}>
      {TariffList.map((tariff, index) => (
        <CardTariff key={index} details={tariff} highlight={index === 2} />
      ))}
    </div>
  );
};

export default Tariff;
