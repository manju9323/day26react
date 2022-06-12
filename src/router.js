import Home from './comp/home'
import About from './comp/about'
import Main from './comp/main'
import Users from './comp/user'
import {Route,Switch,Redirect} from 'react-router-dom'
import React from 'react'

function RouT() {
  return (
    <div>
    <Switch>
    <Route path="/home" component={Home}/>
    <Route path="/users/:id" component={Users}/>
    <Route path="/about" component={About}/>
    <Route path="/main" component={Main}/>
    <Route path="/">
      <Redirect to="/home"/>
      </Route>
    </Switch>
    </div>
  )
}

export default RouT