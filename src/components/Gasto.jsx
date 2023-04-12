import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'

export const Gasto = () => {

    let location = useLocation();
    const plata =location.state.presupuesto;

    const[total,setTotal]=useState(0);
    const [gasto, setGasto] = useState("");
    const [valor, setValor] = useState(0);
    const [items, setItems] = useState([]);
    
    function addItem() {
        const item = {
          gasto: gasto,  
          valor: valor,
        };
        // Add new item to items array
        setItems((oldList) => [...oldList, item]);
        console.log(item)
        // Reset newItem back to original state
        //setGasto("");
        //setValor("");
        setTotal(total+ Number(item.valor))
        
      }


      function handleValor(e){
        setValor(e.target.value);
      }
      function handleGasto(e){
        setGasto(e.target.value);
      }

      

    
  return (
    <div className="container mt-5 w-50">
    <div class="card border-secondary mb-3">
        <div class="card-header">¡Hagamos las cuentas!</div>
        <div class="card-body">

        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: (total*100)/plata +"%"}}></div>
        </div>

            <div class="form-group">
                <div  className='d-flex flex-row justify-content-center mt-2 justify-content-around'>
                    <div className='alert  alert-success d-flex'><h5>Tu presupuesto: </h5> <h5 className='blockquote'> {plata} </h5></div>
                    <div className='alert  alert-warning d-flex'><h5>Restante: </h5> <h5 className='blockquote'>{plata-total}</h5></div>
                </div>
                <h4 for="exampleInputEmail1" class="form-label mt-2">Nombre del gasto</h4>
                <input type="email" name='gasto' onChange={handleGasto} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ej. salchipapas"/>

                <h4 for="exampleInputEmail1" class="form-label mt-2">Valor del gasto</h4>
                <input type="email" name='valor' onChange={handleValor}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ej. $3.500"/>
                

                <div class="w-75 mt-3 mb-2">
                    <button class="btn btn-lg btn-success" onClick={addItem} type="button">Agregar gasto</button>
                </div>
            </div>

            
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Gasto</th>
                    <th scope="col">Total</th>
                    
                    </tr>
                </thead>
                <tbody> 
                {
                   
                    items.map( item=>(
                        <tr className='table-light' key={item.gasto}>
                            <th scope="row">{item.gasto}</th>
                            <td>{item.valor}</td>
                            
                        </tr>
                    )) 
                        
                }
                </tbody>


            </table>



        </div>
    </div>
    </div>
  )
}
