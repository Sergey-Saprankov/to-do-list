const list = document.querySelector(".todo-list");
const items = list.children;
const emptyListMessage = document.querySelector('.empty-tasks');
const newItemForm = document.querySelector('.add-form');
const newItemTitle  = newItemForm.querySelector('.add-form-input');
const taskTemplate = document.querySelector('#task-template').content;
const newItemTemplate = taskTemplate.querySelector('.todo-list-item');
const newTask = newItemTemplate.querySelector('.todo-list-input');

const toggleEmptyListMessage = function () {
  
  if (items.length === 0) {
    emptyListMessage.classList.remove('hidden');
  } else {
    emptyListMessage.classList.add('hidden');
  }
};

const addCheckHandler = function (item) {
  const checkbox = item.querySelector('.todo-list-input');
  checkbox.addEventListener("change", function () {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (let i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  const taskText = newItemTitle.value;
  const task = newItemTemplate.cloneNode(true);
  const newTask  = task.querySelector('span');
  newTask.textContent = taskText;

  addCheckHandler(task);

  list.appendChild(task);

  toggleEmptyListMessage()

  newItemTitle.value = '';
})