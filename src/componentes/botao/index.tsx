import React, { ReactNode } from 'react';
import style from './botao.module.scss';

interface props {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    children?: ReactNode; // Add children prop
}

function Botao({onClick, type, children}: props) {

  return(
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  )
}

export default Botao;