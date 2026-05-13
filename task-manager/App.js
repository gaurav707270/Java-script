const input_task_text = document.getElementById("input-task-text");
const input_task_priority = document.getElementById("input-task-priority");
const task_add_btn = document.getElementById("task-add-btn");

const input_search_task = document.getElementById("input-search-task");
const search_task_priority = document.getElementById("search-task-priority");
const search_task_status = document.getElementById("search-task-status")
const search_task_btn = document.getElementById("search_task_btn")

const show_task_box = document.getElementById("show-task-box");


// const local_storge = () => {
//     const task = JSON.parse(localStorage.getItem("tasks")) || [];

//     localStorage.setItem("tasks", JSON.stringify(taskList));

// }

let isUpdate = false;
let updateIndex = 0;


const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

const local_storage = () => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
};






const diplay_tasks = () => {

    show_task_box.innerHTML = "";

    taskList.map((task, i) => {




        const div = document.createElement("div");

        div.classList.add(
            "d-flex",
            "justify-content-between",
            "align-items-center",
            "border",
            "p-3",
            "rounded",
            "mb-2"


        );

        div.innerHTML = `
            <div>
                <h6 class="mb-1">${task.text}</h6>
                <span class="badge  ${task.priority == "High" ? "bg-danger" : task.priority == "Normal" ? "bg-warning" : "bg-secondary"}">${task.priority} </span>
                <span class="badge  text-dark ${task.status == "Done" ? "bg-success" : "bg-danger"}">${task.status}</span>
            </div >

    <div class="d-flex gap-2">
        <button class="btn btn-outline-secondary btn-sm" onclick="taskStatus(${i})" >${task.status}</button>
        <button class="btn btn-outline-warning btn-sm"  onclick="updateBtn(${i})">Update</button>
        <button class="btn btn-outline-danger btn-sm" onclick="deleteTask(${i})">Delete </button>
    </div>
`;

        show_task_box.appendChild(div);

    });

};

const addTask = () => {

    let status = "Undo"
    const text = input_task_text.value.trim();
    const priority = input_task_priority.value;

    if (text === "") {
        alert("Please enter task");
        return;
    }
    else if (priority === "Select Task Priority") {
        alert("Please enter priority");
        return
    }

    taskList.push({
        text,
        priority,
        status
    });

    local_storage();

    diplay_tasks();

    input_task_text.value = "";
};

task_add_btn.addEventListener("click", () =>
    isUpdate ? updateTask(updateIndex) : addTask()
);
diplay_tasks();




const deleteTask = (i) => {
    taskList.splice(i, 1)
    local_storage()
    diplay_tasks();
}

const updateBtn = (i) => {
    isUpdate = true
    updateIndex = i
    input_task_text.value = taskList[i].text
    input_task_priority.value = taskList[i].priority
    task_add_btn.textContent = "Update Task"

}

const updateTask = (updateIndex) => {
    taskList[updateIndex].text = input_task_text.value
    taskList[updateIndex].priority = input_task_priority.value
    local_storage()
    diplay_tasks()

    isUpdate = false;
    updateIndex = 0;

}

const taskStatus = (i) => {
    taskList[i].status = "Done"
    local_storage()
    diplay_tasks();

    alert("Task Completed");

}




// const searchTask = () => {

//     const searchText = input_search_task.value
//     const searchPriority = input_task_priority.value
//     const searchStatus = search_task_status.value

//     show_task_box.innerHTML = "";

//     const searchTask = taskList.filter((task) => {
//         if (searchText == task.text) {
//             return task
//         }
//     })

// }




search_task_btn.addEventListener("click", () => searchTask())
