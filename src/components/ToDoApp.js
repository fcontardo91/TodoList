import React, { useState } from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import { ToDoList } from './ToDoList'

export const ToDoApp = () => {

  const [title, setTitle] = useState('')
  // const [todos, setTodos] = useState([])
  const [todos, setTodos] = useState([
    {id:crypto.randomUUID(), title: 'Limpiar la casa',completed: false},
    {id:crypto.randomUUID(), title: 'Sacar la basura',completed: true}])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: crypto.randomUUID(),
      title: title[0].toUpperCase() + title.substring(1),
      completed: false,
    }

    setTodos([newTodo, ...todos ])
    setTitle('')
  }

  const handleChange = (e) => {
    var value = e.target.value
    setTitle(value)
  }

  const handleUpdate = ( id, value ) => {
    const array = [...todos]
    const item = array.find( item => item.id === id )
    item.title = value[0].toUpperCase() + value.substring(1)
    setTodos(array)
  }

  const handleDelete = (id) => {
    const array = todos.filter(item => item.id !== id)
    setTodos(array)
  }

  const handleFinish = (id) => {
    const array = [...todos]
    const item = array.find( item => item.id === id )
    item.completed = true
    setTodos(array)
  }

  return (
    <div className='container-fluid'>
      <Card className='bg-dark text-white'>
        <Card.Title className='bg-dark text-center p-1'>LISTA DE TAREAS</Card.Title>
         <Form 
          className='bg-dark'
          onSubmit={handleSubmit}>
          <InputGroup className="bg-dark mb-3 p-2">
            <Form.Control
              onChange={handleChange}
              type='text'
              placeholder='Ingrese tarea'
              value={title}
              />
            <Button 
              variant="primary"
              onClick={handleSubmit} >
              AGREGAR
            </Button>
          </InputGroup>
        </Form>
      </Card>

      <div> 
          { todos.map( item => (
            <ToDoList 
            key={item.id} 
            item={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onFinish={handleFinish}/>
            ))}
      </div>
    </div>
  )
}
