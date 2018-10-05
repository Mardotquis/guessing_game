import React from 'react';
import './Button.css';
 const Button = (props) =>{



    return(
        <button className={props.gameLabel} onClick={props.gameFunc} disabled={props.disabled} >{props.gameLabel}</button>
    )

}

export default Button;