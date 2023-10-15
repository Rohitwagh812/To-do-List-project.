import React from 'react'

function itempage({todo , deleteTODO}) {
//     const items =  ["React Js","Node Js","Express Js"]
  return (
    <div style={{display:"flex" , justifyContent:'center', alignItems:"center"}}>
        <ul style={{textAlign:"left"}}>
            {todo.map((item , index)=>{
                return(
                    <li key={index} style={{marginTop:'10px'}}>
                        {item}
                    <button className='done'
                    style={{marginLeft:'15px'}}
                    onClick={() =>
                        deleteTODO(item)
                         
                    }>
                    Done
                    </button>
                        </li>
            )
                })}
        </ul>

    </div>
  )
}

export default itempage