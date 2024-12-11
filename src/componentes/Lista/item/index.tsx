import { ITarefa } from '../../../types/tarefa'
import style from './item.module.scss'

interface props extends ITarefa{
  selecionaTarefas: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
  { 
    tarefa, 
    tempo, 
    selecionado, 
    completado, 
    id, 
    selecionaTarefas }: props) {
      return (
        <li 
        className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
        onClick={() => !completado && selecionaTarefas
          ({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}
        >
          <h3>{tarefa}</h3>
          <span>{tempo}</span>
          {completado && <span className={style.concluido} aria-label='Tarefa completada'></span>}
        </li>
     )
    }
