import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

export const Main = () => {

  const [presupuesto, setPresupuesto] = useState("");

  function handleChange(e){
    setPresupuesto(e.target.value);
  }
   
  console.log(presupuesto)
  return (
    <div className="container mt-5 w-50">
        <div class="card border-secondary mb-3">
            <div class="card-header">¡Define Tu!! presupuesto!</div>
            <div class="card-body">
            <div class="form-group">
                <h2 for="exampleInputEmail1" class="form-label mt-2">Presupuesto</h2>
                
                <input
                      type="email"
                      name="password"
                      className="form-control"
                      placeholder="Ingresar cantidad"
                      onChange={handleChange}
                      required
                    />
                <small id="emailHelp" class="form-text text-muted">Aprendamos a administrar nuestro dinero.</small>

                <div class="w-75 mt-3 mb-2 ">
                   
                    <NavLink to={'/gastos'} state={{presupuesto}} class="btn btn-lg btn-success"  style={{ textDecoration: 'none' }} type="button"> Continuar</NavLink>
                </div>
                    
                
            </div>
            </div>
        </div>
    </div>
   
  )
}
