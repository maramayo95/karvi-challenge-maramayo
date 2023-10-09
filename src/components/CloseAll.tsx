import React from "react";
import Trash from "../icons/Trash";

interface ButtonDeleteAll {
  title : string;
  onDeleteAll: () => unknown;
}

const CloseAll: React.FC<ButtonDeleteAll> = ({ onDeleteAll, title }) => {
  return (
    <div className="my-2 flex items-center w-[10%}">
      <button
        className="text-buttonFilterFont text-sm px-2"
        onClick={() => onDeleteAll()}
      >
        {title}
      </button>
      <span className="ml-1">
        <Trash />
      </span>
    </div>
  );
};

export default CloseAll;
