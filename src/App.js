import './App.css';
import {Header} from "./Components/Header";
import {Todos} from "./Components/Todos";
import {TodoItem} from "./Components/TodoItem";
import {Footer} from "./Components/Footer";
import {AddTodo} from "./Components/AddTodo";
import {About} from "./Components/About";
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{

    //Deleting this way in react doesn't work, DOM won't get updated and thus, you need to use usestate hooks
    //let index = todos.indexOf(todo);
    //todos.splice(index, 1)

    setTodos(todos.filter((td)=>{
      return td!==todo;
    }))     
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc)=>{
      let srno;
      if(todos.length == 0){
        srno = 0;
      }else{
        srno = todos[todos.length-1].srno +1;
      }

      const myTodo = {
        srno : srno,
        title: title,
        desc: desc,
      }
      setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return(
    <Router>
      <Header title="MyTodosList" searchBar = {true} /> 
      <Routes>
        <Route path="/" element={
            <>
              <AddTodo addTodo = {addTodo}/>
              <Todos todos = {todos} onDelete = {onDelete}/>
            </>
        }/>
        <Route path="/about" element ={<About/>}/>
      </Routes>
      <TodoItem/>
      <Footer/>
    </Router>
  );
}

export default App;
