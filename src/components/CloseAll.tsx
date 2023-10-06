import React from "react";
import Trash from "../icons/Trash";

interface ButtonDeleteAll {
  onDeleteAll: () => unknown;
}

const CloseAll: React.FC<ButtonDeleteAll> = ({ onDeleteAll }) => {
  return (
    <div className="flex ">
      <span className="text-buttonFilterFont  px-2">Limpiar Filtros</span>
      <button onClick={() => onDeleteAll()}>
        <Trash />
      </button>
    </div>
  );
};

export default CloseAll;
