import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import TaskList from './TaskList';

const FormTask = () => {
    //definimos los state
    let taskFromLocalStorage = JSON.parse(localStorage.getItem('taskslist')) || [];
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(taskFromLocalStorage);

    const handleSubmit = (e)=>{
      e.preventDefault();
      setTasks([...tasks, task]);
      setTask('');
    }

    //aqui uso el ciclo de vida del componente

    /* useEffect(()=>{
        //aqui se ejecuta tanto en montaje como en actualizacion
        console.log('Ejecutando el ciclo de vida del componente FormTask');
    }); */
    /* 
    useEffect(()=>{
        //aqui se ejecuta solo en montaje 
        console.log('Ejecutando el ciclo de vida del componente FormTask');
    }, []); */

    useEffect(()=>{
        //aqui se ejecuta tanto en montaje como en actualizacion pero dependiendo de un o unos states
       /// console.log('Ejecutando el ciclo de vida del componente FormTask');
       localStorage.setItem('taskslist', JSON.stringify(tasks));
    }, [tasks]); //array de dependencias

    const deleteTask = (taskName)=>{
      let fiterArray = tasks.filter(task => task !== taskName);
      setTasks(fiterArray);
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
            value={task}
          />
          <Button variant='primary' type='submit'>
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <section className='container'>
        <TaskList tasksArray={tasks} deleteTask={deleteTask}></TaskList>
      </section>
    </>
  );
};

export default FormTask;
