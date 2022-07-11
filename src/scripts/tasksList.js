

const renderListItems = () => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';

    const listItemsElems = listItems
        .sort((a, b) => {
            if (a.done - b.done !== 0) {
                return a.done - b.done;
            };
            if (a.done) {
                return new Date(b.dateEnd) - new Date(a.dateEnd);
            }
            return new Date(b.dateStart) - new Date(a.dateStart);
        })
        .map(({ text, done, date }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');

            listItemElem.append(checkboxElem, text);

            return listItemElem;
        });
    listElem.append(...listItemsElems);
};

export {renderListItems}