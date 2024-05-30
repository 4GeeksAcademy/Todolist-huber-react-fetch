import React, { useEffect, useState } from "react";

export const Fetch = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const sincronizar = async () => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/todo/users/hubs0"
      );

      if (response.ok == false) {
        throw new Error("Levante un error");
      }

      const data = await response.json();
      setTasks(data.todos); 
    } catch (error) {
      console.log("cath error: ", error);
    }
  };
  const getUserAgain = async () => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/todo/users/hubs0",
        {
          method: "POST",
          body: JSON.stringify([]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok == false) {
        throw new Error("Levante un error");
      }
    } catch (error) {
      console.log("cath error: ", error);
    }
  };

  const addTask = async (todo) => {
    try {
      console.log(todo);
      const responseAddTaks = await fetch(
        "https://playground.4geeks.com/todo/users/hubs0",
        {
          method: "POST",
          body: JSON.stringify(todo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
	  if (responseAddTaks.ok == false) {
        throw new Error("Levante un error en addTasks");
      }

      const dataAddTasks = await responseAddTaks.json();
      setTasks([...tasks, dataAddTasks]);
    } catch (error) {
      console.log("cath error addTaks: ", error);
    }
  };
  const eliminarTask = async (id) => {
    try {
      const responseDeleteTask = await fetch(
        "https://playground.4geeks.com/todo/todos/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (responseDeleteTask.ok == false) {
        throw new Error("Levante un error en deleteTask");
      }
    } catch (error) {
      console.log("cath error deleteTask: ", error);
    }
  };
  const clearTasks = async () => {
    try {
      const responseClearTask = await fetch(
        "https://playground.4geeks.com/todo/users/hubs0",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (responseClearTask.ok == false) {
        throw new Error("Levante un error en clearTask");
      }

      setTasks([]);
      getUserAgain();
    } catch (error) {
      console.log("error del clearTask: ", error);
    }
  };

  useEffect(() => {
    sincronizar();
  }, []);
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