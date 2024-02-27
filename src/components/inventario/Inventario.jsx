import { React, useEffect, useState } from "react";
import { getDisponibilidad } from "../../api/mobiliario.api";
import { InventarioCard } from "./InventarioCard";

export const Inventario = () => {
  const [disponibilidad, setDisponibilidad] = useState([]);

  useEffect(() => {
    async function loadDisponibilidad() {
      const resp = await getDisponibilidad();
      setDisponibilidad(resp.data);
    }

    loadDisponibilidad();
  }, []);

  return (
    <div className="cardsContainer">      
      {disponibilidad.map((disponibilidad) => (
        <InventarioCard
          disponibilidad={disponibilidad}
          key={disponibilidad.id}
        />
      ))}
    </div>
  );
};

export default Inventario;
