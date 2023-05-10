import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { taskData } from "./TaskData";
import StatePool from "state-pool";

function Task(props) {
    let [cross, setCross] = useState(false);

    const selector = (taskData) => taskData;
    const patcher = (taskData, index) => taskData.splice(index, 1);

    const [index, setIndex] = StatePool.useState(taskData, {
        selector: selector,
        patcher: patcher,
    });

    const delBtn = () => {
        setIndex(props.index);
    };

    const checkBtn = (e) => {
        // console.log(props.index);
        // let y = 
        if (e.target.checked) {
            setCross(true);
            // taskData.value[props.index].status = true;
        } else {
            setCross(false);
            // taskData.value[1].status = false;
        }
        // console.log(taskData);
        localStorage.setItem("dataKey", JSON.stringify(taskData.value));
    };

    return (
        <>
            <div className="task">
                <div className="task-left">
                    <input type="checkbox" name="" id={props.index} onChange={checkBtn} />
                    <label className={"task-name " + (cross ? "cross-text" : "")} htmlFor={props.index}>
                        {props.task.name}
                    </label>
                    {/* <div className="task-date">{props.task.date}</div> */}  
                </div>
                <div className="task-del" onClick={delBtn}>
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>
        </>
    );
}

export default Task;
