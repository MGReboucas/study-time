import '../App.css';
import style from './App.module.scss';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import { Cronometro } from '../componentes/Cronometro';


function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Cronometro />
      <Lista />
    </div>
  );
}
export default App;