import React from 'react'
import {TodoItem} from '../My component/TodoItem';

export const Todos = (props) => {
  let myStyle={
    minHeight:"58vh",
    margin:"40px auto",
  }
  return (
    <div className='container ' style={myStyle}>
        <h3 className='my3 '>Todos List</h3>
        {props.todos.length===0? "No Todos to Display":
        props.todos.map((todos)=>{
        return  <TodoItem todo={todos} key={todos.sno} onDelete={props.onDelete}/>
      
        })
        }
        
    </div>
  )
}
