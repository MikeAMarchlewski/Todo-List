var todos = ["Run a 5k"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    //handle input
    if(input === "list") {
        listTodos();
    }   else if(input=== "new") {
        //ask for new todo
        addTodo();
    }   else if(input === "delete"){
        //ask for index of Todo to be deleted
        deleteTodo();
    }  
    //ask again for input.
    var input = prompt("What would else you like to do?");

}
console.log("Ok, You have quit the App.");

function listTodos(){
    console.log("**********")
    todos.forEach(function(todo, i){
    console.log(i+ ": " + todo);
    });
    console.log("**********")
};

function addTodo(){
    var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
        
        console.log("Added Todo");
};

function deleteTodo(){
    var index = prompt("Enter index of todo to delete")
        //delete the todo
        //splice() deletes a specific item from an array
        todos.splice(index,1);
        console.log("Deleted Todo");
};