import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const FormTask = () => {
    //definimos los state
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e)=>{
      e.preventDefault()
    }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='my-3 text-center'>
          <Form.Control
            className='mb-3'
            type='text'
            placeholder='Ingresar una tarea'
            onChange={(e)=> setTask(e.target.value)}
          />
          <Button variant='primary' type='submit'>
            Agregar
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default FormTask;
