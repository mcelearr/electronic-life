for (var i = 0; i < plan.length; i++){
  myFunction(plan[i]);
}

function myFunction(string) {
    console.log(string);
    var node = document.createElement("p");
    var textnode = document.createTextNode(string);
    node.appendChild(textnode);
    document.getElementById("game").appendChild(node);
}
