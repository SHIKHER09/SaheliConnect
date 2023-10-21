import React, { useState, useEffect } from 'react';

import Countdown from './Countdown';
import Tods from './Tods';


export default function Calendar() {

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const todosRef = doc(db, 'todos', 'my-todos');
    const todoSnap = await getDoc(todosRef);

    if (todoSnap.exists()) {
      setTodos(todoSnap.data().todos);
    } else {
      setTodos([]);
    }
  };

  const addTodo = async (todo) => {
    const todosRef = doc(db, 'todos', 'my-todos');
    const todoSnap = await getDoc(todosRef);

    let newTodos = [];

    if (todoSnap.exists()) {
      newTodos = [...todoSnap.data().todos, todo];
    } else {
      newTodos = [todo];
    }

    await setDoc(todosRef, { todos: newTodos });
    getTodos();
  };

  const removeTodo = async (id) => {
    const todosRef = doc(db, 'todos', 'my-todos');
    const todoSnap = await getDoc(todosRef);

    let newTodos = [];

    if (todoSnap.exists()) {
      newTodos = todoSnap.data().todos.filter((todo) => todo.id !== id);
    }

    await setDoc(todosRef, { todos: newTodos });
    getTodos();
  };

  const toggleTodo = async (id) => {
    const todosRef = doc(db, 'todos', 'my-todos');
    const todoSnap = await getDoc(todosRef);

    let newTodos = [];

    if (todoSnap.exists()) {
      newTodos = todoSnap.data().todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    }

    await setDoc(todosRef, { todos: newTodos });
    getTodos();
  };


  return (
    <div style={{backgroundColor:"white"}}>

      <h2 style={{ paddingLeft: "5vw",color:"black" ,fontSize:"26px",paddingTop:"4vh"}}>Reminders</h2>
      <div style={{ display: "flex", justifyContent: "center", maxwidth: "100dvw", overflowX: "hidden", color: "white", gap: "4rem ",backgroundColor:"white",paddingTop:"3vh" }}>
        <div style={{ border: "2px", borderStyle: "double", borderColor: "pink", backgroundColor: "rgb(175,185,192)",  maxHeight: "40vh",minHeight:"25vh", width: "30vw",  borderRadius: '20px',display:"flex",alignItems:"center",justifyContent:"center" ,borderColor:"rgba(0, 255, 255, 0.150)"}}>
          <Countdown />
          

        </div>

        {/* to do */}

        <Tods></Tods>
      </div>
    </div>

  )
}
