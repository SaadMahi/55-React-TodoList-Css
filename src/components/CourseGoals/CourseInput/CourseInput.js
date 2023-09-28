import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";


const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [isValid, setValid] = useState(true);

  // User keystroke onChange eventListner
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValid(true);
    }

    setEnteredValue(event.target.value);
  };

  /* once user input is set and user
clicks add goal btn, onAddGoal function 
which takes in the new user's input and add it 
with default goals */
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setValid(false);
    } else {
      setValid(true);
      props.onAddGoal(enteredValue);
    }
  };

// this component will be in pascal case
  const FormControl = styled.div`

  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
  background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

${'' /* here we want to check for invalid class that's why we 
didn't remove .invalid we will be applying condtion on it 
&.invalid input{
  border-color: red;
  background: rgb(216, 146, 146);
}

&.invalid label{
  color: red;
  */}

  `

  return (
    <form onSubmit={formSubmitHandler}>

     <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
