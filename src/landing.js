import react from'react'

import './landing.css'


function Part(props) {   return( props.explor.map(el=> 
   
   <div> 
             
       <div className="part1">   
         <img className="imgpart1"  src={el.img} />  
    <h4 className="ml-2 TEX">{el.name}</h4> 
     </div>     
      </div>)   
       )  
     }

export default Part

