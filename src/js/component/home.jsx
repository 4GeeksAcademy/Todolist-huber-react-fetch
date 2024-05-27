import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [tasks, setTasks] = useState([]); 
	return (
		<React.Fragment>
				<h1>My Todos</h1>
			<div className="container">
					<div className="list">
						<ul>
							<li>
								<input 
								type="text" 
								placeholder="Write your task here"
								onChange={(event) => {
									setInputValue(event.target.value)
								}}
								value={inputValue} 
								onKeyDown={(event) => { 
									if (event.key == "Enter") {
										if (inputValue.trim() == "") {
											alert("Do not send empty spaces")
										} else {
										setTasks([...tasks, inputValue]); 
										setInputValue("") 
										  }	
									} 
								}}
								/>
							</li>
							{tasks.map((task, index) => (
							<li key={index} className="containerLi">
								{task} 
								<button
								type="reset"
								onClick={(event) => {
									const deleteTask = tasks.filter((list) => list !== task)
									setTasks(deleteTask)
								}}
								>
									X
								</button>
							</li>
							))}
						</ul>
					</div>
					<p>
					{tasks.length + " Item left"}
					</p>			
			</div>
			<div className="stick"></div>
			<div className="stick2"></div>
		</React.Fragment>
	);
};

export default Home;