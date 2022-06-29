import "./Card.css";
import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [hidden, setHidden] = useState();
  const [open, setOpen] = useState(false);
  return (

    <div id="CardParent" onClick={()=>{
      props.onClick(props.id); 
      props.flips<2 ? setOpen(true) : setOpen(false);
      }}>
        
    {  open  ? 
    <div  className="back">
        <p  className={ props.isArabic ? `arabicCard` : null }>{props.text}</p>
      </div> 
       :  
       <div className="front">front</div>
    
}
</div>
)}

export default Card;
