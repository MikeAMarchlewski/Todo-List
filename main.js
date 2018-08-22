var todos = ["Run a 5k"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    //handle input
    if(input === "list") {
        console.log("**********")
        todos.forEach(function(todo, i){
        console.log(i+ ": " + todo);
        });
        console.log("**********")
    }   else if(input=== "new") {
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
        //At this point in the code along there is no way to keep this repeating until the user quits. It is one and done so need a loop. This note is pre while loop added.
        console.log("Added Todo");
    }   else if(input === "delete"){
        //ask for index of Todo to be deleted
        var index = prompt("Enter index of todo to delete")
        //delete the todo
        //splice()
        todos.splict(index,1);
        console.log("Deleted Todo");
    }  
    //ask again for input.
    var input = prompt("What would else you like to do?");

}
console.log("Ok, You have quit the App.");