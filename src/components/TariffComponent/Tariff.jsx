import React, { useState } from "react";
import CardTariff from "../CardTariff";
import TariffList from "../../data/tariffList";
import styles from "./Tariff.module.css";

const Tariff = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };
  return (
    <div className={styles.cardContainer}>
      {TariffList.map((tariff) => (
        <CardTariff
          key={tariff.id}
          details={tariff}
          highlight={tariff.id === selectedId}
          onSelect={() => handleSelect(tariff.id)}
        />
      ))}
    </div>
  );
};

export default Tariff;
