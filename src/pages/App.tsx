import '../App.css';
import style from './App.module.scss';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import { Cronometro } from '../componentes/Cronometro';
import { useState } from 'react';
import { ITarefa } from '../types/tarefa';


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas = {setTarefas} />
      <Lista  tarefas ={tarefas}/>
      <Cronometro />
    </div>
  );
}
export default App;