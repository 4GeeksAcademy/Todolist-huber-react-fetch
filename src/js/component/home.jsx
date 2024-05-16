import React, { useState } from "react";


const Home = () => {
	const [ inputValue, SetInputValue ] =useState("")
	const [ todos, setTodos ] =useState([])
	return (
		<div className="container">
			<h1>My Todos{inputValue}</h1>
			<ul>
				<li><input 
				type="text" 
				onChange={(e) => SetInputValue(e.target.value)}
				value={inputValue}
				placeholder="What do you need to do?"></input>
				</li>
				<li>Make the bed <i class="fas fa-trash-alt"></i></li>
				<li>Walk the dog <i class="fas fa-trash-alt"></i></li>
				<li>Wash my hands <i class="fas fa-trash-alt"></i></li>
				<li>Eat <i class="fas fa-trash-alt"></i></li>
			</ul>
			<dir>23 tasks</dir>
		</div>
	)
	}
export default Home;
