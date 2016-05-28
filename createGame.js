function myFunction() {
    var node = document.createElement("p");
    var textnode = document.createTextNode(valley.grid.space);
    node.appendChild(textnode);
    document.getElementById("game").appendChild(node);
}

  console.log(valley.grid.space)

  myFunction();
