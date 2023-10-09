import React from "react";
import Trash from "../icons/Trash";

interface ButtonDeleteAll {
  title : string;
  onDeleteAll: () => unknown;
}

const CloseAll: React.FC<ButtonDeleteAll> = ({ onDeleteAll, title }) => {
  return (
    <div className="my-2 flex  items-center w-[10%}">
      <button
        className="text-buttonFilterFont flex gap-2 text-sm px-2"
        onClick={() => onDeleteAll()}
      >
        {title}
      <span className="">
        <Trash />
      </span>
      </button>
    </div>
  );
};

export default CloseAll;
