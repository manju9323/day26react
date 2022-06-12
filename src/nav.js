import React from 'react'
import {NavLink} from 'react-router-dom'
function Nav() {
  return(
    <div>
    <NavLink  activeClassName="nv" to="/home">HOME</NavLink>
    <NavLink  activeClassName="nv" to="/about">ABOUT</NavLink>
    <NavLink  activeClassName="nv" to="/main">MAIN</NavLink>
    </div>
  )
}

export default Nav