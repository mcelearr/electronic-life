for (var i = 0; i < plan.length; i++){
  myFunction(plan[i]);
}

function myFunction(string) {
  var node = document.createElement("p");
  var textnode = document.createTextNode(valley.grid.space);
  node.appendChild(textnode);
  document.getElementById("game").appendChild(node);
}

myFunction();
