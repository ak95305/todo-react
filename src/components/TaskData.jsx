import StatePool from "state-pool";

const items = JSON.parse(localStorage.getItem('dataKey'));

export const taskData = StatePool.createState(items == null ? [] : items);


