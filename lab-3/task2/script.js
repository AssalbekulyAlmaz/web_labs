
const formElement = document.getElementById('todo-form');
const inputElement = document.getElementById('todo-input');
const listElement = document.getElementById('todo-list');
const emptyStateElement = document.getElementById('todo-empty');


const updateEmptyStateVisibility = () => {
  const hasItems = listElement.children.length > 0;
  emptyStateElement.style.display = hasItems ? 'none' : 'block';
};

/**
 * @param {string} text 
 * @returns {HTMLLIElement} 
 */
const createTodoItem = (text) => {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const mainContainer = document.createElement('div');
  mainContainer.className = 'todo-item__main';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-item__checkbox';
  checkbox.setAttribute('aria-label', 'Mark task as done');

  const textSpan = document.createElement('span');
  textSpan.className = 'todo-item__text';
  textSpan.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'todo-item__delete-button';
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('aria-label', 'Delete task');

  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('todo-item--completed', checkbox.checked);
  });

  deleteButton.addEventListener('click', () => {
    listElement.removeChild(listItem);
    updateEmptyStateVisibility();
  });

  mainContainer.appendChild(checkbox);
  mainContainer.appendChild(textSpan);

  listItem.appendChild(mainContainer);
  listItem.appendChild(deleteButton);

  return listItem;
};

/**
 * @param {SubmitEvent} event 
 */
const handleFormSubmit = (event) => {
  event.preventDefault();

  const trimmedValue = inputElement.value.trim();

  if (!trimmedValue) {
    inputElement.focus();
    return;
  }

  const todoItem = createTodoItem(trimmedValue);
  listElement.appendChild(todoItem);

  inputElement.value = '';
  inputElement.focus();

  updateEmptyStateVisibility();
};

formElement.addEventListener('submit', handleFormSubmit);

updateEmptyStateVisibility();

