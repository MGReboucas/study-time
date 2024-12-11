import { tempoParaSegundos } from "../../common/utils/time";
import Botao from "../botao";
import { ITarefa} from '../../types/tarefa'
import style from './Cronometro.module.scss';
import { Relogio } from "./Relogio";
import { useEffect, useState } from "react";

interface Props {
     selecionado: ITarefa | undefined,
     finalizarTarefa: () => void
}



export function Cronometro({selecionado, finalizarTarefa}: Props){
     console.log('conversão: ', tempoParaSegundos('01:01:01'));
     const [tempo, setTempo] = useState<number>();
     useEffect(() => {
          if(selecionado?.tempo){
               setTempo(tempoParaSegundos(selecionado.tempo));
          }
     }, [selecionado]);

     function regressiva(contador: number = 0){
          setTimeout(() => {
               if(contador > 0){
                    setTempo(contador - 1);
                    return regressiva(contador - 1);
               }
               finalizarTarefa();
          }, 1000)
     }

     return(
          <div className={style.cronometro}>
               <p className={style.titulo}>Escolha um Card</p>
               <div className={style.relogioWrapper}>
                    <Relogio tempo = {tempo} />
               </div>
          <Botao onClick={() => {
               regressiva(tempo);
          }}>Começar!</Botao>
          </div>
     )
}