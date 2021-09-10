import './App.css';
import React, { AddTodo } from './myComp/AddTodo';
import { Header } from './myComp/Header';
import { Home } from './myComp/Home';
import { TodoList } from './myComp/TodoList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'





function App() {
  
  return (
    <div className="box">  
        <Router>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AddTodo" component={AddTodo} />
        
        <Redirect to="/" />
      </Switch>
    </Router> 
    <TodoList/>
    </div>
  );
}

export default App;
