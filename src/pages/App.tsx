import '../App.css';
import style from './App.module.scss';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import { Cronometro } from '../componentes/Cronometro';
import { useState } from 'react';
import { ITarefa } from '../types/tarefa';


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefas(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas = {setTarefas} />
      <Lista 
        tarefas ={tarefas}
        selecionaTarefas = {selecionaTarefas}
      />
      <Cronometro selecionado = {selecionado} />
    </div>
  );
}
export default App;