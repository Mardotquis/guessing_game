import React from 'react';
import './Form.css';
let Form = (props) =>{

    return(
        <div>
            <form  onSubmit={props.stopFunc} >
                <label htmlFor="theirInput">Please type in a number:</label>
                <input type="number" id="theirInput" className="form__box" ></input>
                <input type="submit" id="submitButton" className="form__submit"></input>

            </form>
        </div>
    )
}

export default Form;