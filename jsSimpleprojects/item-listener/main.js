var addFormItem = document.getElementById('addForm');
var lists = document.getElementById('items');
var filterItem = document.getElementById("filter");

addFormItem.addEventListener('submit', addItem);

function addItem(event) {
  event.preventDefault();
  console.log(1);

  var newItem = document.getElementById('item').value;
  console.log(newItem);

  var liEle = document.createElement('li');
  liEle.className = 'list-group-item';
  liEle.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  liEle.appendChild(deleteBtn);
  console.log(liEle);
  lists.appendChild(liEle);
}

lists.addEventListener('click',removeItem);
function removeItem(event) {
  if(event.target.classList.contains('delete')) {
    if(confirm("Are You Sure")) {
      var liEle = event.target.parentElement;
      lists.removeChild(liEle);
    }
  }
}

filterItem.addEventListener('keyup', filterItems);

function filterItems(event) {
  var text = event.target.value.toLowerCase();
  //console.log(text);
  var itemsList = document.getElementsByTagName("li");
  var itemArr = [];
  for(var i of itemsList){
    //console.log("Hello");
    itemArr.push(i.firstChild.textContent);
    //console.log(i.firstChild.textContent);
    if(i.firstChild.textContent.toLowerCase().indexOf(text) != -1){
      i.style.display = 'block';
    }
    else {
      i.style.display = 'none';
    }
  }
  //console.log(itemArr);
}