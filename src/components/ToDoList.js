import { Badge, Button, Card, Col, Form, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react'
export const ToDoList = ({item, onUpdate, onDelete, onFinish}) => {

    const [isEdit, setIsEdit] = useState(false);
    
    const TodoEdit = ( ) => {
        
        const [newValue, setNewValue] = useState(item.title);

        const handleChange = (e) => {
            const value = e.target.value;
            setNewValue(value);
        } 
    
        const handleUpdate = ( e ) => {
            e.preventDefault()
            onUpdate(item.id, newValue)
            setIsEdit(false)
        }
        
        return (
            
            <Card className='bg-dark text-white'>
                <Form 
                className='bg-success'
                onSubmit={handleUpdate}>
                <InputGroup className="bg-success p-2">
                    <Form.Control
                    onChange={handleChange}
                    type='text'
                    value={newValue}
                    />
                    <Button 
                    variant="warning"
                    onClick={handleUpdate} >
                    ACTUALIZAR
                    </Button>
                </InputGroup>
                </Form>
             </Card>
        )
    }

    const TodoElement = ( ) => {

        const handleUpdate = ( ) => {
            setIsEdit(true)
        }

        const handleDelete = () => {
            onDelete(item.id)
        }

        const handleFinish = () => {
            onFinish(item.id)
        }

        return (
            <>
            { !item.completed ? 
            <Card className='bg-success p-1'>
                <Col
                className='bg-success'>
                    <Button
                        className='btn_ok'
                        variant='primary'
                        onClick={handleFinish}>OK</Button>
                    <Badge pill bg='light'
                    className='text-dark'>{item.title}</Badge>
                    <Button
                        className='btn_delete'
                        variant='danger'
                        onClick={handleDelete}>DELETE</Button>
                    <Button
                        className='btn_edit'
                        variant='warning'
                        onClick={handleUpdate}>EDIT</Button>
                </Col>  
            </Card>
            :
            <Card className='bg-danger p-1'>
                <Col
                className='bg-danger'>
                    <Badge 
                        className='texto_tachado'
                        pill bg='dark'>{item.title}</Badge>
                    <Button
                        className='btn_delete'
                        variant='dark'
                        onClick={handleDelete}>DELETE</Button>
                </Col>  
            </Card>
    }
            </>
        )
    }

  return (
    <div>
    { isEdit ? <TodoEdit /> : <TodoElement /> }
    </div>
  )
}
