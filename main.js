
// 1
const header = document.getElementById("main-heading")
const button = document.getElementById("btn")
const red = document.getElementById("red")
const blue = document.getElementById("blue")
const yellow = document.getElementById("yellow")
const green = document.getElementById("green")
const black = document.getElementById("black")

//2+3
header.textContent = "New DOM Layout"
para1.textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."
para2.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."

//4
button.addEventListener("click", () =>{
    let p = document.createElement("p");
    para4.appendChild(p);
    p.textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."
})

//5
red.classList.remove("bg-white");
red.classList.add("bg-danger");

blue.classList.remove("bg-white");
blue.classList.add("bg-primary");

yellow.classList.remove("bg-white");
yellow.classList.add("bg-warning");

green.classList.remove("bg-white");
green.classList.add("bg-success");

black.classList.remove("bg-white");
black.classList.add("bg-dark");


