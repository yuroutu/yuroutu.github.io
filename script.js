var todolist = ["跑步","洗碗","寫作業"]
var todolistDiv = document.getElementById("todolist")
var inputDiv = document.getElementById("input")

todolistDiv.innerHTML = render(todolist)

function render(todolist){
  var resultString = ''
  for(var i = 0; i < todolist.length; i++){
    resultString = resultString + '<div class="todo"><button onclick="deleteTodo(' + i + ')" >刪除</button><div>' + todolist[i] + '</div></div>'
  }
  return resultString; 
}
function addTodo(){
  todolist.push(inputDiv.value);
  todolistDiv.innerHTML= render(todolist);
}
function deleteTodo(index){
  var newArray = []
  for(var i=0; i < todolist.length; i++) {
    if (i !== index) {
      newArray.push(todolist[i])
    }
  }
   todolist = newArray;
  todolistDiv.innerHTML= render(todolist);
}