import React from 'react'
import {
    faCircleCheck , faPen ,faTrashCan
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  
const ToDo =({toDo ,markDone,setupdateData, deleteTask})=>{
    return(

        <>
            {toDo && toDo.sort((a,b) => a.id>b.id ? 1 : -1).map((task , index)=>{
          return (
            <React.Fragment key={task.id}>

              <div className='col taskBg'>
                <div className={task.Status ? "done" : ""}>
                  <span className='taskNumbr'>{index + 1}</span>
                  <span className='taskText'>{task.title}</span>
                </div>
                
                <div className='iconsWrap'>
                  <span  title='Completed / Not Completed'
                  onClick={()=>markDone(task.id)}>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                  </span>

                  {task.Status ? null :(
                     <span className='text-warning' title='Edit'
                     onClick={()=>setupdateData({id:task.id,title:task.title ,
                      Status : task.Status ? true :false
                     })}>
                     <FontAwesomeIcon icon={faPen}/>
                   </span>
                  )}
                 
                  <span className='text-danger' title='Delete' onClick={()=>deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan}/>
                  </span>
                </div>
              </div>
             
            </React.Fragment>
          )
        })}
        </>
    )
}
export default ToDo