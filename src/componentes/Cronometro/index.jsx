import Botao from "../botao";
import style from './Cronometro.module.scss';
import { Relogio } from "./Relogio";


export function Cronometro(){
     return(
          <div className={style.cronometro}>
               <p className={style.titulo}>Escolha um Card</p>
               <div className={style.relogioWrapper}>
                    <Relogio />
               </div>
          <Botao>Começar!</Botao>
          </div>
     )
}