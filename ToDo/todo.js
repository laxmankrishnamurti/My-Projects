const input = document.querySelector("#input");
const submit = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

//Remarks :- Bad Code Readability.

submit.addEventListener("click", () => {
  let inputValue = input.value;

  if (inputValue === "") {
    alert("Empty Todo, Please enter a valid Todo");
  } else {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "todo-box");

    let li = document.createElement("li");
    li.setAttribute('id', 'list-items')
    li.textContent = inputValue;

    //Delete Button

    const btnBox = document.createElement('div');
    btnBox.setAttribute('id', 'btn-box')

    let delBtn = document.createElement("button");
    delBtn.setAttribute("id", "del-btn");
    delBtn.setAttribute("title", "Click to Remove Todo");
    delBtn.textContent = "Remove";

    //Done Button

    let doneBtn = document.createElement("button");
    doneBtn.setAttribute("id", "done-btn");
    doneBtn.setAttribute("title", "Click to Done Todo");
    doneBtn.textContent = "Done";

    //Appending all content inside ul
    btnBox.appendChild(delBtn);
    btnBox.appendChild(doneBtn);
    newDiv.appendChild(li);
    newDiv.appendChild(btnBox);
    todoList.appendChild(newDiv);
    input.value = "";

    //Deleteing Todo-list

    delBtn.addEventListener("click", () => {
      newDiv.remove();
    });

    //Marking Completed work

    doneBtn.addEventListener('click', () => {
      // let list = document.getElementById('list-items');
      li.innerHTML = `<del>${li.innerText}</del>`
    })


  }
});

