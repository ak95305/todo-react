import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { taskData } from "./TaskData";
import StatePool from "state-pool";

function TaskInput() {

    console.log(taskData);

    const selector = (taskData) => taskData;
    const patcher = (taskData, data) => taskData.push(data);
    
    const [data, setData] = StatePool.useState(taskData, {
        selector: selector,
        patcher: patcher,
    });

    const AddBtn = () => {
        let inputText = document.querySelector(".input-box input").value;
        // taskData.push({
        //     name: inputText,
        // });
        setData({ name: inputText, status: false });
        document.querySelector(".input-box input").value = "";
    };







    return (
        <>
            <div className="input-box">
                <input type="text" placeholder="Add Task..." />
                <button type="button" className="add-btn" onClick={AddBtn}>
                    <FontAwesomeIcon icon={faPlus} />
                    Add
                </button>
            </div>
        </>
    );
}

export default TaskInput;
