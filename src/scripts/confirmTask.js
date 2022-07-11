import { renderListItems } from "./tasksList.js";

const confirmItem = event => {
    const confirmItem = tasks.find(item =>
        item.text === event.target.parentNode.textContent);
    confirmItem.done = event.target.checked
    confirmItem.dateEnd = confirmItem.done ? new Date() : undefined;
    renderListItems();
};

export {confirmItem}