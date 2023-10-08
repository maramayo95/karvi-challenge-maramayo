import React, { ReactNode } from 'react';

type ButtonProps = {
  icon: ReactNode;
  text: string;
  onClick: () => void; // La función onClick no recibe argumentos y no retorna nada (modifica el estado)
};

const ButtonFilterMobile:React.FC<ButtonProps> = ({icon,text,onClick}) => {
  return (
    <div className='flex items-center text-sm text-buttonCard font-bold' onClick={onClick}>
        {icon} <span className="ml-2">{text}</span>
    </div>
  )
}

export default ButtonFilterMobile