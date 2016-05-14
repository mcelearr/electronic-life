function myFunction() {
    var node = document.createElement("p");
    var textnode = document.createTextNode("Hello");
    node.appendChild(textnode);
    document.getElementById("game").appendChild(node);
}

//console.log(valley)

myFunction()
