import React from 'react'
import Close from '../icons/Close';
import { capitalizeSentence } from '../utils';
interface ButtonFilter {
    id : string;
   onDeleteFilter: (id:string) => unknown;
}


const ButtonFilter: React.FC<ButtonFilter> = ({onDeleteFilter, id}) => {
  return (
    <div className=" flex py-1 pl-1 pr-3 text-sm rounded-full border-2 border-buttonFilter text-buttonFilter">
        <span className="px-2">{capitalizeSentence(id)}</span>
        <button onClick={() => onDeleteFilter(id)}><Close/></button>
    </div>
  )
}

export default ButtonFilter