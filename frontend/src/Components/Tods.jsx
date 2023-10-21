import React, { useState } from 'react';

function Tods() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div  style={{border:"2px",borderStyle:"double",borderColor:"black",backgroundColor:"rgb(175,185,192)",minHeight:"5vh",maxHeight:"40vh",width:"30vw",paddingLeft:"4vw",borderRadius:'20px',borderColor:"cyan",border:"0.5px",borderStyle:"groove"}}>
      <h1 style={{marginLeft:"4.5vw",marginBottom:"2vh",color:"black"}}>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} style={{padding:"6px 9px",borderRadius:"30px",backgroundColor:"white",color:'black', fontSize:"18px",marginTop:"4px"}}
      />
      <button onClick={addTodo} style={{padding:"4px 10px",borderRadius:"30px", marginLeft:"10px",backgroundColor:"white",color:"black",fontSize:"17px"}}>Add Task</button>
      <br />
      <br />
      <ul style={{ listStyleType:"none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span
              style={{fontSize:"19px",
                textDecoration: todo.completed ? 'line-through' : 'circle',
                marginRight: '10px',color:"black",
              }}
              onClick={() => toggleTodo(index)}
            >
             ● {todo.text}
            </span>
            <button
              style={{ backgroundColor: 'green',  border: 'none', padding: '5px 10px', cursor: 'pointer',padding:"4px 12px",borderRadius:"12px",fontSize:"16px",color:"white" }}
              onClick={() => deleteTodo(index)}
            >
              Done  ✓
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tods;
