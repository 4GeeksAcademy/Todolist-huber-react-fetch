import React, { useState } from "react";

export const Input = () => {
    const [inputValue, setInputValue] = useState("") 
	const [todos, setTodos] = useState([]); 
 return ( <input 
		type="text" 
		placeholder="What needs to be done?"
		onChange={(event) => {
			setInputValue(event.target.value) }}
		value={inputValue} 
		onKeyDown={(event) => { 
        if (event.key == "Enter") {
			setTodos([...todos, inputValue]); 
			setInputValue("") 
			}
		}}
	/>
 )
}