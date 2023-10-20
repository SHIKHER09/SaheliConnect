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
    <div  style={{border:"2px",borderStyle:"double",borderColor:"black",backgroundColor:"whitesmoke",maxHeight:"40vh",minHeight:"5vh",width:"30vw",paddingLeft:"4vw",borderRadius:'20px'}}>
      <h1 style={{marginLeft:"3vw"}}>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} style={{padding:"4px 8px",borderRadius:"30px"}}
      />
      <button onClick={addTodo} style={{padding:"4px 8px",borderRadius:"30px", marginLeft:"10px"}}>Add Task</button>
      <br />
      <br />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginRight: '10px',
              }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </span>
            <button
              style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer',padding:"4px 12px",borderRadius:"12px" }}
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
