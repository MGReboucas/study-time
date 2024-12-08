import './style.scss';
import Botao from '../botao';


function Formulario(){
     return(
          <form className="novaTarefa">
               <div className="inputContainer">     
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                     <input 
                         type="text"
                         name="tarefa"
                         id="tarefa"
                         placeholder="O que voce quer estudar?"
                         required
                    />
               </div>

               <div className="inputConteiner">
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                         type="time" 
                         step="1"
                         name="tempo"
                         id="tempo"
                         min="00:00:00"
                         max="01:30:00"
                         required
                    />
               </div>
               <Botao />
          </form>
     )
}
export default Formulario;