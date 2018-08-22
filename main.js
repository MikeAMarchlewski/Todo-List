var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    //handle input
    if(input === "list") {
        console.log(todos);
    } else if(input=== "new") {
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
        //At this point in the code allong there is no way to keep this repeating until the user quits. It is one and done so need a loop. This note is pre while loop added.
}
    //ask again for input.
    var input = prompt("What would else you like to do?");

}
console.log("Ok, You have quit the App.");