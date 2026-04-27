


// const inputTask = document.getElementById("input-task");
// const addTask = document.getElementById("add-task");
// const showTask = document.getElementById("show-task");

// addTask.addEventListener("click", () => {
//     if (inputTask.value === "") return alert("Enter task");

//     let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

//     taskList.push(inputTask.value);

//     localStorage.setItem("taskList", JSON.stringify(taskList));

//     inputTask.value = "";
//     displayTasks();
// });

// function displayTasks() {
//     showTask.innerHTML = "";

//     let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

//     taskList.forEach((task, index) => {
//         let div = document.createElement("div");

//         div.innerHTML = `
//         <div style="height:60px;"
//             class="d-flex my-2 p-2 justify-content-between shadow w-100 rounded">

//             <p class="fs-5">${task}</p>

//             <div>
//                 <button onclick="updateTask(${index})" class="btn btn-outline-info mx-2">Update</button>
//                 <button onclick="deleteTask(${index})" class="btn btn-outline-danger">Delete</button>
//             </div>
//         </div>
//         `;

//         showTask.appendChild(div);
//     });
// }

// displayTasks();

// function deleteTask(index) {
//     let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

//     taskList.splice(index, 1);

//     localStorage.setItem("taskList", JSON.stringify(taskList));

//     displayTasks();
// }

// function updateTask(index) {

//     let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

//     addTask.textContent = "Update";
//     inputTask.value = taskList[index];

//     taskList[index] = " "

//     taskList[0, index] = inputTask.value;

//     localStorage.setItem("taskList", JSON.stringify(taskList));

//     displayTasks();
// }

const inputTask = document.getElementById("input-task");
const addTask = document.getElementById("add-task");
const showTask = document.getElementById("show-task");

let editIndex = null; 

addTask.addEventListener("click", () => {
    if (inputTask.value === "") return alert("Enter task");

    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

    if (editIndex !== null) {
        
        taskList[editIndex] = inputTask.value;
        editIndex = null;
        addTask.textContent = "Add Task";
    } else {
    
        taskList.push(inputTask.value);
    }

    localStorage.setItem("taskList", JSON.stringify(taskList));

    inputTask.value = "";
    displayTasks();
});

function displayTasks() {
    showTask.innerHTML = "";

    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

    taskList.forEach((task, index) => {
        let div = document.createElement("div");

        div.innerHTML = `
        <div style="height:60px;"
            class="d-flex my-2 p-2 justify-content-between shadow w-100 rounded">

            <p class="fs-5">${task}</p>

            <div>
                <button onclick="updateTask(${index})" class="btn btn-outline-info mx-2">Update</button>
                <button onclick="deleteTask(${index})" class="btn btn-outline-danger">Delete</button>
            </div>
        </div>
        `;

        showTask.appendChild(div);
    });
}

displayTasks();

function deleteTask(index) {
    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

    taskList.splice(index, 1);

    localStorage.setItem("taskList", JSON.stringify(taskList));

    displayTasks();
}

function updateTask(index) {
    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];


    inputTask.value = taskList[index];
    addTask.textContent = "Update";

    
    editIndex = index;
}