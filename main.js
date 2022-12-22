const task = document.querySelector('.task');
const tasklist = document.querySelector('.tasklist');
const tasks = [];

const todolist = JSON.parse(localStorage.getItem('todos'));
todolist.forEach((item)=>{
  tasks.push(item);
  let list = document.createElement('li');
  list.innerText = item;
  tasklist.appendChild(list);
})



function addTodo(){
  tasks.push(task.value);
  localStorage.todos = JSON.stringify(tasks);
  let list = document.createElement('li');
  list.innerText = task.value;
  tasklist.appendChild(list);
}


