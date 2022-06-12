import './App.css';
import {BrowserRouter as Router}from 'react-router-dom';
import Nav from './nav'
import RouT from './router'

function App() {
  return (

    <div className="App">
<Router>
<Nav/>
<RouT/>
</Router>   
    </div>
  );
}

export default App;
