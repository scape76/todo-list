import { renderListItems } from "./tasksList.js";

const createEvent = () => {
    const input = document.querySelector('.task-input');
    if (!input.value) return false;
    localStorage.setItem({ text: input.value, done: false, dateStart: new Date(), dateEnd: undefined });
    input.value = '';

    renderListItems();
};

export {createEvent};