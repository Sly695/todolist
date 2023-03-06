import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import '../../../Assets/style/components/todolist.css';
import PushPinIcon from '@mui/icons-material/PushPin';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '../button/button';
import Input from '../input/input';
import Select from '../select/select';

const TodolistComponent = ({ optionsList }) => {

  const [ todoList, setTodoList ] = useState(
    JSON.parse(localStorage.getItem('todoList'))
  );
  const [ todo, setTodo ] = useState('')
  const [ priority, setPriority ] = useState('high')
  const [ todoListFiltered, setTodoListFiltered ] = useState([])

  useEffect(() => {

    localStorage.setItem('todoList', JSON.stringify(todoList))

  }, [todoList])

  const addTodoOnList = () => {
    setTodoList([...todoList, { priority: priority, todo: todo }])
    setTodo('')
  }

  const searchFilter = () => {
    setTodoListFiltered(todoList.filter((item) => item.todo.toLowerCase().includes(todo.toLowerCase())))
  }

  const deleteTodo = (i) => {
    setTodoList([...todoList.slice(0, i), ...todoList.slice(i + 1)])
  }

  return (
      <Grid xs={10} sm={8} md={4} container className="list">
        <PushPinIcon className="pin" style={{ fontSize: '4.5rem' }}/>
        <Grid container xs={12}>
          <h1 className="title">TODO-LIST</h1>
        </Grid>
        <Grid xs={12} className="search-add-bar">
          <Input required placeholder='Un rendez-vous ? Un rappel ?' maxLength="50" className="search-input" value={todo} onChange={(event) => {setTodo(event.target.value); searchFilter(event.target.value)}}/>
          <Select
            value={priority}
            label="Priority"
            handleChange={(event) => setPriority(event.target.value)}
            className="select"
            optionsList={optionsList}
          >
          </Select>
        </Grid>
        <Grid xs={12}>
            {
              todo ?
              todoListFiltered.map((todo, i) => {
                return <p className={todo.priority} key={i}>{todo.todo}<CancelIcon className="cancel-icon" onClick={() => deleteTodo(i)} /></p>
              })
              :
              todoList.map((todo, i) => {
                return <p className={todo.priority} key={i}>{todo.todo}<CancelIcon className="cancel-icon" onClick={() => deleteTodo(i)} /></p>
              })
            }
        </Grid>
        <Grid container xs={12} className="button-wrap">
          <Button style={{ display : todo === "" ? "none" : "block" }} handleClick={() => addTodoOnList()} className="button-primary" name='Ajouter' />
          <Button handleClick={() => setTodoList([])} className="button-primary" name="Supprimer la liste" />
        </Grid>
        <div className="triangle-yellow"></div>
      </Grid>
  )
}

export default TodolistComponent