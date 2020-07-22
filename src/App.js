import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');


// when the app loads, we need to listen to the database and fetch new todos as they get added/removed
useEffect(() => {
  // this code here...fires when the app.js loads
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
  })

}, [])



  console.log(input);

  const addTodo = (event) => {
    //This will fire off when we click the button
    event.preventDefault(); // will stop the page from refreshing
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); //Clear up the input after clicking the button
  }
  return (
    <div className="App">
      <h1>Hello Coders !!!</h1>
      <form>
        <FormControl>
          <InputLabel>Write A Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button type='submit' disabled={!input} onClick={addTodo} variant="contained" color="primary">Add to do</Button>
      </form>
      <ul>
          {todos.map((todo) => (
            <Todo todo={todo}/>
            // <li>{todo}</li>

          ))}
        </ul>
    </div>
  );
}

export default App;
