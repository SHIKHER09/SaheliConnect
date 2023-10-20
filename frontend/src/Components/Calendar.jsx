import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Tods from './Tods';

// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyBjzJYTpEt5M0WIV9jqFgKMTQJR5Td8sYA",
//   authDomain: "saheli-65af3.firebaseapp.com",
//   projectId: "saheli-65af3",
//   storageBucket: "saheli-65af3.appspot.com",
//   messagingSenderId: "77260084573",
//   appId: "1:77260084573:web:f7effa9aeb2887af5d04b4",
//   measurementId: "G-Q2J0DSLT3L"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


export default function Calendar() {
   
  const [todos, setTodos] = useState([]);

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
    <div  style={{display:"flex",justifyContent:"center",maxwidth:"100dvw",overflowX:"hidden"}}>
      {/* calendar */}

    <LocalizationProvider dateAdapter={AdapterDayjs} style={{maxWidth:"30vw",padding:"0",margin:"0"}}>
      <DateCalendar style={{maxWidth:"40vw",padding:"0",margin:"0 10vw",overflow:"hidden",WebkitOverflowScrolling: "touch"}} />
    </LocalizationProvider>

    {/* to do */}

    <Tods></Tods>
    

    </div>
  )
}
