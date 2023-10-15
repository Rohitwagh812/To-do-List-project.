import React ,{useState} from 'react'

function inputpage({addnewtodo , }) {

    const [inaputvalue , setInputvalue] = useState ("")

  return (
    <div className='inputpage'>
        <input type="text" placeholder='Enter your task here'
         value={inaputvalue} onChange={(e)=> setInputvalue(e.currentTarget.value)}/>
         <button className='button' onClick={()=>{
          addnewtodo(inaputvalue)
          setInputvalue("")
        }}>Add Task </button>
    </div>
  )
}

export default inputpage