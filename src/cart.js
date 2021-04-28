import React  from "react";
import "./cart.css"







function Car(props){

   return ( props.sl.map(el=>
       <div className = "Cartes">
          <img className="immg"  src={el.img} />  
 <h5>{el.nome}</h5>
       </div>
   )
   )
}

export default Car;