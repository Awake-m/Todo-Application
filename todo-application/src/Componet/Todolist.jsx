import React from 'react'
import './style.css'

function Todolist({data,hdlt,hupd}) {
    return (
        <div className='box2'><br></br>
            <h1>{data.work} - {data.isCompleted ? "Edit" : "New User Add"}</h1><br></br>
            <div className='btn'>
            <button onClick={()=>hupd(data.id)}>Edit</button>
            <button onClick={()=>hdlt(data.id)}>Delete</button></div>
        </div>
      )
}

export default Todolist
