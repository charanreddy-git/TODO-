
const data = document.querySelector("input");

function add(){
    const todo = document.createElement("li");
    todo.innerHTML = data.value;
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.onclick = function () {
        todo.remove();        
   }
   todo.appendChild(del);
   todo.className = "space";
   document.querySelector("body").appendChild(todo);
}

