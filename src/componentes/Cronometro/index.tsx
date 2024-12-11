import { tempoParaSegundos } from "../../common/utils/time";
import Botao from "../botao";
import { ITarefa} from '../../types/tarefa'
import style from './Cronometro.module.scss';
import { Relogio } from "./Relogio";
import { useState } from "react";

interface Props {
     selecionado: ITarefa | undefined
}

export function Cronometro({selecionado}: Props){
     console.log('conversão: ', tempoParaSegundos('01:01:01'));
     const [tempo, setTempo] = useState<number>();
     if(selecionado?.tempo) {
          setTempo(tempoParaSegundos(selecionado.tempo))
     }
     return(
          <div className={style.cronometro}>
               <p className={style.titulo}>Escolha um Card</p>
               Tempo: {tempo}
               <div className={style.relogioWrapper}>
                    <Relogio />
               </div>
          <Botao>Começar!</Botao>
          </div>
     )
}