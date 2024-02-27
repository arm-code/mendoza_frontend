import React from "react";
import './InventarioStyles.css'

export const InventarioCard = ({ disponibilidad }) => {
  return (
    <div className="card">      
      <h3>{disponibilidad.description}</h3>      
      <h4>TOTAL: {disponibilidad.total_quantity}</h4>
    </div>
  );
};

export default InventarioCard;
