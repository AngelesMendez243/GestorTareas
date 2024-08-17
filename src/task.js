//Lista de tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // localStorage nos permite almacenar datos en nuestro navegador

// Función para llevar las tareas 
export const getTasks = () => tasks;

//Función para agregar una tarea
export const addTask = (task) => {
    console.log(task)
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    console.log(tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Función para eliminar una taraea 
 export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
 };

 // Función para actualizar una tarea 
 export const toggleTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
 };