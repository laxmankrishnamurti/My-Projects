const input = document.querySelector("#input");
const submit = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");
console.log(todoList);

//I forgeten the rule that is :- Divide your task into multiple function. Sorry for this. Next time I'll remember this rule.

submit.addEventListener("click", () => {
  let inputValue = input.value;

  if (inputValue === "") {
    alert("Empty Todo, Please enter a valid Todo");
  } else {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "todo-box");

    let li = document.createElement("li");
    li.textContent = inputValue;

    //Delete Button

    let delBtn = document.createElement("button");
    delBtn.setAttribute("id", "del-btn");
    delBtn.setAttribute("title", "Click to Remove Todo");
    delBtn.textContent = "Remove";

    //Appending all content inside ul
    newDiv.appendChild(li);
    newDiv.appendChild(delBtn);
    todoList.appendChild(newDiv);
    input.value = "";

    //Deleteing Todo-list

    delBtn.addEventListener("click", () => {
      newDiv.remove();
    });
  }
});
