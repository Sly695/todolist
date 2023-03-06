import React from 'react'
import TodolistComponent from '../../common/todolist/todolistComponent'

const HomeComponent = ({ optionsList }) => {
  return (
    <TodolistComponent optionsList={optionsList} />
  )
}

export default HomeComponent