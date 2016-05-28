for (var i = 0; i < plan.length; i++){
  myFunction(plan[i]);
}

function myFunction(string) {
    console.log(string);
    var node = document.createElement("p");
<<<<<<< HEAD
    var textnode = document.createTextNode(valley.grid.space);
    node.appendChild(textnode);
    document.getElementById("game").appendChild(node);
}

  console.log(valley.grid.space)

  myFunction();
