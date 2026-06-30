import react from "react";
import { useState, useRef, useEffect } from "react";
import classes from "./TodoList.module.css";

function TodoList(){

    const focusInput = useRef(null);



    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            handleAddTask();
        }
    };

    const tabs = [
        "Active Tasks",
        "Completed Tasks"
    ];

    const defaultTasks = [
        {
            id: "1", 
            text: "Eat breakfast", 
            isCompleted: false
        }, 
        {
            id: "2", 
            text: "Go to work", 
            isCompleted: false
        }, 
        {
            id: "3", 
            text: "Go to the gym", 
            isCompleted: false
        }, 
        {
            id: "4", 
            text: "Go to sleep", 
            isCompleted: false
        }
    ]

    const[tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");

        return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
        
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } , [tasks]);

    const[newTask, setNewTask] = useState("");
    const[completedTask, setCompletedTask] = useState(false);
    const[isActive, setIsActive] = useState("Active Tasks");

    const handleAddTask = () => {
        if(newTask.trim() !== ""){
            setTasks(task => [...task, {id: crypto.randomUUID(), text: newTask, isCompleted: false}]);
            setNewTask("");
            focusInput.current.focus();
        }
    }

    const handleRemoveTask = (taskId) => {
        
        setTasks(tasks.filter((task) => task.id !== taskId)); 
    }
    
    const handleCompleteTask = (taskId) => {
        setTasks(tasks.map((task) => task.id === taskId ? {...task, isCompleted: true} : task));
    }

    // const handleCompleteTask = (taskId) => {
    //     setTasks(tasks.map((task) => task.id === taskId ? {...task, completed: "✅", isCompleted: true} : task));

    //     setCompletedTask(true);
    //     setTimeout(() => {
    //         setTasks((prevTasks) => prevTasks.map(task => task.id === taskId ? {...task, isCompleted: false} : task));
    //     }, 2000);
    // }

    return(
        <>
            <div>
                <div style={{display: "flex", flexDirection: "column",alignItems: "center", background: "black", color: "white", padding: "20px", height: "150vh"}}>
                    <h2>To-Do-List</h2>
                    {/* <ol>
                        {tasks.map((task, index) => <li key={index} style={{color: index > 2 ? "red" : "black", cursor: "pointer"}} onClick={() => handleRemoveTask(index)}>{task.text}</li>
                        )}
                    </ol> */}
                    <div style={{marginTop: "20px", display: "flex", gap: "10px", width: "30%", justifyContent: "center"}}>
                        <input 
                            type="text"
                            placeholder="Enter a task..."
                            value={newTask}
                            onChange={(e) => {
                            setNewTask(e.target.value)}}
                            className={classes.input}
                            ref={focusInput}
                            onKeyDown={handleKeyDown}
                        />
                        <button onClick={handleAddTask} className={classes.add}>Add Task</button>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px", gap: 10, background: "rgba(109, 109, 109, 0.64)", color: "black", padding: "20px", margin: "20px auto", width: "30%", borderRadius: "10px"}}>
                        
                        <div style={{display: "flex", gap: "10px", marginBottom: "10px"}}>
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`${classes.tab} ${isActive === tab ? classes.activeTab : ""}`}
                                    onClick={() => setIsActive(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                            
                        </div>
                        <div style={{display: "flex", flexDirection: "column", gap: "10px", width: "100%"}}>
                            {isActive === "Active Tasks" ? tasks.filter(task => !task.isCompleted).map((task, index) => <div key={task.id} className={classes.tasks}>
                                {index + 1}. {task.text} 
                            <div className={classes.action}>
                                <button className={classes.removeBut} onClick={()=>handleRemoveTask(task.id)}>
                                    Delete
                                </button>
                                <button className={classes.complete} onClick={()=>handleCompleteTask(task.id)}>{task.isCompleted ? "✅" : "✔️"}
                                </button>
                                </div>
                            </div>) : tasks.filter(task => task.isCompleted).map((task, index) => <div key={task.id} className={classes.tasks}><div style={{textDecoration: "line-through"}}>{index + 1}. {task.text}</div></div>)}
                        </div>
                        
                        {/* {tasks.map((task, index) => <div key={task.id} className={classes.tasks}>
                        {index + 1}. {task.text} <div className={classes.action}><button className={classes.removeBut} onClick={()=>handleRemoveTask(task.id)}>{task.remove}</button><button className={classes.complete} onClick={()=>handleCompleteTask(task.id)}>{task.completed}</button></div>
                        {task.isCompleted && (
                        <div className={classes.doneTask}>
                            DONE
                        </div>)}

                        </div>)} */}
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default TodoList;