import { tasks } from "./storage.js";
import { createEvent } from "./createEvent.js";
import { renderListItems } from "./tasksList.js"
import {confirmItem} from "./confirmTask.js" 
 
document.addEventListener('DOMContentLoaded', () => {
    renderListItems(tasks);
})

const attachBtn = document.querySelector('.create-task-btn');
attachBtn.addEventListener('click', createEvent);

const confirmEvent = document.querySelector('.list');
confirmEvent.addEventListener('click', confirmItem);
