import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'

import AddTask from './Components/AddTask'
import ToDo from './Components/ToDo'
import './App.css'
import UpdateForm from './Components/UpdateForm'

function App() {

  const [toDo, setToDo] = useState([])

  const [newTask, setNewTask] = useState("")
  const [updateData, setupdateData] = useState("")

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1
      setToDo([
        ...toDo,
        { id: num, title: newTask, Status: false }
      ])


      setNewTask('')
    }
  }


  const deleteTask = (id) => {

    setToDo(toDo.filter(task => task.id !== id));


  }
  const markDone = (id) => {
    // let newTask = toDo.map(task => {
    //   if (task.id === id) {
    //     return ({ ...task, Status: !task.Status })
    //   }
    //   return task
    // })
    // setToDo(newTask)


    setToDo( toDo.map(task=>task.id === id ?
      ({ ...task, Status: !task.Status }):(task)))

  }
  const cancleUpdate = () => {
    setupdateData("")

  }
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      Status: updateData.Status ? true : false,
    }
    setupdateData(newEntry)
  }
  const updateTask = (e) => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id)

    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject)
    setupdateData("")
  }
  return (
    <div className='container App'>
      <br />
      <br />
      <div className='gg'>
      <h2 >TO DO LIST</h2>
      </div>
      <br />
      <br />


      {/* Update Task */}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancleUpdate={cancleUpdate}
        />
      ) : (

        // {/* Add Task */}

        <AddTask
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />

      )}






      <br />

      {/* Display ToDos */}

      {toDo && toDo.length ? '' : "No Tasks..."}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setupdateData={setupdateData}
        deleteTask={deleteTask}
      />

    </div>
  )
}

export default App
