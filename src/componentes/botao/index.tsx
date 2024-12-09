import React, { ReactNode } from 'react';
import style from './botao.module.scss';

class Botao extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode; // Add children prop
}> {
  render() {
    const { type = "button", children } = this.props;
    return (
      <button type={type} className={style.botao}>
        {children}
      </button>
    );
  }
}

export default Botao;