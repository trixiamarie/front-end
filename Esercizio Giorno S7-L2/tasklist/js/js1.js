let btnAdd = document.querySelector('#btnAdd');
let btnDel = document.querySelector('#btnDel');
let inputTask = document.querySelector('#inputTask');
let taskList = document.querySelector('#taskList');
let taskArr = JSON.parse(localStorage.getItem('task')) || [];

btnAdd.addEventListener('click', addTask);

window.onload = function () {
    taskArr.forEach(createTask);
}

function createTask(task) {
    //div
    let div = document.createElement('div');
    div.classList.add('container', 'd-flex', 'justify-content-between', 'list-group-item');
    //bottone delete
    let btnDel = document.createElement('button');
    btnDel.innerHTML = `<i class="bi bi-trash-fill"></i>`;
    btnDel.classList.add('border', 'border-0', 'bg-transparent', 'text-danger');
    //paragrafo
    let p = document.createElement('p');
    p.classList.add('p-0', 'm-0');
    p.innerText = task;
    taskList.appendChild(div);
    div.appendChild(p);
    div.appendChild(btnDel);

    btnDel.addEventListener('click', function () {
        div.remove();
        let taskIndex = taskArr.indexOf(task);
        if (taskIndex !== -1) {
            taskArr.splice(taskIndex, 1);
            localStorage.setItem('task', JSON.stringify(taskArr));
        }
    });
}

function addTask() {
    let input = inputTask.value;
    taskArr.push(input);
    localStorage.setItem('task', JSON.stringify(taskArr));
    //crea il div chiamando la funzione di createTask, però da come valore l'input perchè lo da come paramentro
    createTask(input);  
    console.log(inputTask.value);
    inputTask.value = "";
}

