//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() { //This function is a method because its a propertie of task? this should not be a arrow function. arrow functions are bad for methods. 
        return this.tasks.filter((task)=> task.completed===false ) //can remove curly braces if the function immediatly returns a value
        
        // const tasksToComplete = this.tasks.filter((task) => { // see above for cleaner shorter version
        //     return task.completed === false
        // })
        // return tasksToComplete
    }
}

console.log(tasks.getTasksToDo())