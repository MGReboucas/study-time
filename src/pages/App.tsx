import '../App.css';
import './style.scss';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';

function App() {
  return (
    <div className="AppStyle">
      <h1>Melhore seu tempo nos estudos</h1>
      <Formulario />
      <Lista />
    </div>
  );
}
export default App;