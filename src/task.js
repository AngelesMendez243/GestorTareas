//Lista de tareas
let task = JSON.parse(localStorage.getItem("tasks")) || []; // localStorage nos permite almacenar datos en nuestro navegador

// Función para llevar las tareas 
export const getTasks = () => tasks;

//Función para agregar una tarea
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

};