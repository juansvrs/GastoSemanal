import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  
  return (
    <div>
       <nav class="navbar navbar-expand-lg  navbar-dark bg-primary p-4">
            <div class="container">
            <NavLink to={'/'}  style={{ textDecoration: 'none' }} >
              <h1 className='navbar-brand' >Gasto Semanal</h1> 
            </NavLink>
            </div>
        </nav>
    </div>
  )
}
