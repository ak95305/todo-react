import React, { useEffect, useState } from "react";
import Task from "./Task";
import { taskData } from "./TaskData";

function TaskList() {
    const [data, setData] = useState(taskData.value);

    taskData.subscribe(function(value){
        setData(value);
        localStorage.setItem('dataKey', JSON.stringify(value));
    });

    return (
        <>
            <div className="task-list">
                <ul>
                    {data ? data.map((task, index) => (
                        <li key={index}>
                            <Task task={task} index={index} />
                        </li>
                    )): ""}
                </ul>
            </div>
        </>
    );
}

export default TaskList;
