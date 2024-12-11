import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './item';
import style from './lista.module.scss';


interface props{
  tarefas: ITarefa[],
  selecionaTarefas: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefas }: props ) {
     return (
       <aside className={style.listaTarefas}>
         <h2> Estudos do dia </h2>
         <ul>
           {tarefas.map(item => (
             <Item
              selecionaTarefas={selecionaTarefas}
               key={item.id}
               {...item}
             />
           ))}
         </ul>
       </aside>
     )
   }
export default Lista;