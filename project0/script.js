const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // input method
  todoItem = prompt("Enter To Do Item")
  if (todoItem){
    // console.log(todoItem)

    //make the new LI container
    newItem = document.createElement("li")
    newItem.className = classNames["TODO_ITEM"]

    //make the checkbox entry
    newCheckbox = document.createElement("input")
    newCheckbox.setAttribute("type", "checkbox")
    newCheckbox.className = classNames["TODO_CHECKBOX"]
    newCheckbox.onclick = unchecked_count

    //make the label for the checkbox
    newLabel = document.createElement("label")
    newLabel.className = classNames["TODO_TEXT"]
    // newLabel.htmlFor = 'p'
    newLabel.textContent = todoItem

    newItem.appendChild(newCheckbox)
    newItem.appendChild(newLabel)

    list.appendChild(newItem)
    itemCountSpan.textContent = list.children.length
    unchecked_count()
  }
  // console.log(list.children.length)
}

function unchecked_count(){
  // var checkedBoxes = document.querySelectorAll('input[name=mycheckboxes]:checked');
  inputs = document.getElementsByTagName("input");
  count = 0
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type == "checkbox" && inputs[i].checked == false){
      count = count + 1
    }  
  }
  uncheckedCountSpan.textContent = count
  // console.log("clicked")
}

function remove_checked(){
  if (list.children.length > 0){

    inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++) {
      if(inputs[i].type == "checkbox" && inputs[i].checked == true){
        
      }  
    }
    // console.log(list.children[1])
    // console.log(list.children.length)
    // console.log(list.children[0].children)
    
    let to_remove = []
    for (var i = 0; i < list.children.length; i++){
      entry = list.children[i]
      if (entry.children[0].checked == true){
        to_remove.push(entry)
      }
    }

    for (var i = 0; i < to_remove.length; i++){
      list.removeChild(to_remove[i])
    }


    itemCountSpan.textContent = list.children.length
    unchecked_count()
  }
}
