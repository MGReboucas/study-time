import style from './Relogio.module.scss';

export function Relogio(){
     return(
               
               <div className={style.relogioNumero}>
                    <span>0</span>
                    <span>0</span>
                    <span >:</span>
                    <span>0</span>
                    <span>0</span>
                    <span>:</span>
                    <span>0</span>
                    <span>0</span>
               </div>
     )
}