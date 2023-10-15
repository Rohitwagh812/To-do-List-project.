import { useState } from 'react'
import './App.css'
import Inputpage from './page/inputpage'
import Itempage from './page/itempage'
import Count from './page/Count'
import Time from './page/time'


function App() {

  
 const [todo , setTodo] = useState([])

 const addnewtodo=(newtodo) =>{
   setTodo([...todo , newtodo])
 
 }
 const deleteTODO  = (itemTODODelte) =>{
   const fliteltodoitem = todo.filter((item) => item !== itemTODODelte)
   setTodo(fliteltodoitem)
 }
 const itemcount = todo.length

 console.log(todo)

  return (
   <div className="app">
        
       <Time />
       <h1>My TO DO List App</h1>
       <Count itemcount={itemcount}/>
       <Inputpage addnewtodo={addnewtodo}  />
       <Itempage todo={todo} deleteTODO={deleteTODO}/>
   </div>
  )
}

export default App
