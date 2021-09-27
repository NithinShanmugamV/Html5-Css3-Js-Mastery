function part1A() {
    alert("Functions of some document properties");
    console.log("Examine the document susing console.dir(document): ");
    console.dir(document);
    console.log("Examine domain of document using console.log(document.domain): ",
        document.domain);
    console.log("Examine URL using console.log(document.URL): ",
        document.URL);
    document.title = "Document Object Model";
    console.log("Examine title of document using console.log(document.title): ",
        document.title);
    console.log("Examine html type of document using console.log(document.doctype): ",
        document.doctype);
    console.log("Examine head of document using console.log(document.head): ",
        document.head);
    console.log("Examine body of document using console.log(document.body): ",
        document.body);
    console.log("Examine all html element of document using console.log(document.all): ",
        document.all);
    console.log("Note this returns all the elements in the form of array. If you look at ", "at it you can see our header is at 10th index. To access this we can say: ");
    console.log("console.log(document.all[10]): ",
        document.all[10]);
    //document.all[10].textContent = "Hello";
    console.log("We can also change content of header using document.all[10].textContent = \"Hello\".",
        "However it is not advised to use this as if there is any change in html document,",
        "the rule will break.");
    console.log("Examine all forms of document using console.log(document.forms): ",
        document.forms);
    console.log("Examine all links of document using console.log(document.links): ",
        document.links);
    console.log("Note, when the result is returned in arrays you can iterate or select ",
        "items as how we normally does(using index), but we cannot use array methods in it");
    console.log("Examine all images of document using console.log(document.images): ",
        document.images);
}

function part1B() {
    alert("Using document.getElementById()");
    var headerTitle = document.getElementById('header-title');
    console.log("Lets get elements using their id document.getElementById('header-title'): ", headerTitle);
    headerTitle.textContent = "Hello";
    console.log("Let us change title of document using  headerTitle.textContent = \"Hello\";");
    var mainTitle = document.getElementById('main-title');
    mainTitle.innerText = "Good Bye";
    console.log("We can also change title of document using headerTitle.innerText = \"Good Bye\";");
    console.log("textcontent",headerTitle.textContent);
    console.log("innerText", headerTitle.innerText);
    console.log("now text content in console is still span element even though its style",
        "display:is set to none but if we were to change this to inner ",
        "text and save you'll see that span element is not there. So it actually",
        " pays attention to the styling so that's one of the biggest differences ",
        "between the two but you can use them for most part pretty interchangeably");
    var formTitle = document.getElementById('form-title');
    formTitle.innerText = "Good Bye";
    formTitle.innerHTML = '<div> <h3>Hello</h3><h5> Hi there</h5> </div>';
    console.log("Tou can use innerHTML to change contents that are inside a particular ",
        "element. For Example: headerTitle.innerHTML = '<div> <h3>Hello</h3><h5> Hi there</h5> </div>'; ");
    console.log("h1 tag(Item Listener) is not changed to div. innerHTML pushed this div inside html");
    console.log(formTitle);
    console.log("");
    var header = document.getElementById('main-header');
    header.style.borderBottom = 'solid 3px #000';
    console.log("We can also manipulate css styles using js. Let's say we want to add border ",
        "to header. First get header element using getElementById and then use following line:",
        "header.style.borderBottom = 'solid 3px #000';");
}

function part1C() {
    alert("Using document.getElementByClassName()");
    var items = document.getElementsByClassName('list-items');
    console.log("document.getElementsByClassName('list-items') ",
        "returns an array of all elements that has class 'list-items'",
        items);
    items[0].textContent = "Hello";
    items[1].style.fontWeight = 'bold';
    items[2].style.color = 'red';
    console.log("Let us change content of list items using items[i].textContent = \"Hello\";");
    console.log("It gets difficult when we have to apply a style to all items.",
       "items.style.backgroundColor = 'red' wont work it is an HTMLcollection.",
        "So what we can do is loop through the array and apply style");
    for(i of items){
        i.style.backgroundColor = '#00B2FF';
    }
    console.log("Now Let's use getelementsbytag name to get all list items.",
        "This works exactly same but instead of getting by class you");
    console.log("Note last item is not styled as we are styling elements ",
        "which has class list-item and last li element does not have this");
}
function part1D() {
    alert("Using document.getElementsByTagName()");
    console.log("Let's use document.getElementsByTagName() to get all list items.");
    var items = document.getElementsByTagName('li');
    console.log("document.getElementsByTagName('li') ",
        "returns an array of all li html tags",
        items);
    items[0].textContent = "Hello";
    items[1].style.fontWeight = 'bold';
    items[2].style.color = 'red';
    console.log("Let us change content of list items using items[i].textContent = \"Hello\";");
    console.log("It gets difficult when we have to apply a style to all items.",
       "items.style.backgroundColor = 'red' wont work it is an HTMLcollection.",
        "So what we can do is loop through the array and apply style");
    for(i of items){
        i.style.backgroundColor = '#00B2FF';
    }
    console.log("Now Let's use getelementsbytag name to get all list items.",
        "This works exactly same but instead of getting by class you");

}

function part1E() {
    alert("Using document.querySelector()");
    console.log("We will select header and give some border.",
        "\nvar header = document.querySelector('#main-header');",
        "\nheader.style.borderBottom = 'solid 3px #000';");
    var header = document.querySelector('#main-header');
    console.log("Note you can use any CSS selectors inside querySelector('USE_CSS_SELECTOR')");
    header.style.borderBottom = 'solid 3px #000';
    console.log("Let us set some text in textbox.\nvar input = document.querySelector('input');",
    "\ninput.value = \"Enter input\";");
    var input = document.querySelector('input');
    input.value = "Enter input";
    console.log("Even though there are two input values query selector by ",
        "default select only first value");
    console.log("To style submit button,\nvar submit = document.querySelector('input[type = \"submit\"]');",
        "\nsubmit.value = \"Send\";");
    var submit = document.querySelector('input[type = "submit"]');
    submit.value = "Send";
    console.log("To style list-items, give font color as red to first list item.",
        "\nvar list = document.querySelector('.list-items');",
        "\nlist.style.color = 'red';");
    var list = document.querySelector('.list-items');
    list.style.color = 'red';
    console.log("To style list-items, give font color as green vto last list item.",
        "\nvar lastItem = document.querySelector('.list-group :last-child');",
        "\nlastItem.style.color = 'green';");
    var lastItem = document.querySelector('.list-group :last-child');
    lastItem.style.color = 'green';
    console.log("To style list-items, give font color as green vto last list item.",
        "\nvar nthListItem = document.querySelector('.list-group :nth-child(2n)');",
        "\nnthListItem.style.color = '#00B2FF'");
    var nthListItem = document.querySelector('.list-group :nth-child(2n)');
    nthListItem.style.color = 'orange';
    console.log("Note even thought we have used css selector that selects all even childs",
        ", querySelector only selects first. We can use querySelectorAll() to solve this");
    console.log("var titles = document.querySelectorAll('.title');",
        "\nvar nthItems = document.querySelectorAll('.list-group-item:nth-child(2n)');",
        "\n Note this returns an array, So u cannot use nthListItem.style.color = '#00B2FF';",
        "as it will throw err. Instead u need to iterate over array to style them");
    var titles = document.querySelectorAll('.title');
    var nthItems = document.querySelectorAll('.list-group-item:nth-child(2n)');
    for(i of nthItems){
        i.style.backgroundColor = '#00B2FF'
    }
    console.log(nthItems);

}

function reset(){
    console.clear();
    var mainTitle = document.getElementById('main-title');
    var formTitle = document.getElementById('form-title');
    var items = document.getElementsByClassName('list-group-item');
    var header = document.getElementById('main-header');
    var input = document.querySelector('input');
    var submit = document.querySelector('input[type = "submit"]');
    var listItem = document.querySelector('#items');
    var itemList = document.querySelector('#items');
    var headerContainer = document.getElementById('main-header');

    header.style.borderBottom = '0';
    mainTitle.innerHTML = 'Add items<span class="p-2 bg-dark text-white h-10" style="display: none;"> DOM</span>';
    headerContainer.innerHTML = '<div class="container"><h1 id="header-title">Item Listener <span class="p-2 bg-dark text-white h-10" style="display: none;"> DOM</span></h1></div>';
    formTitle.innerHTML = 'Items';
    items[0].textContent = "items1";
    items[1].style.fontWeight = 'normal';
    items[2].style.color = 'black';
    for(i of items){
        i.style.backgroundColor = 'white';
        i.style.color = 'black';
    }
    input.value = "";
    submit.value = "Submit";
    listItem.parentNode.style.backgroundColor = 'white';
    itemList.previousElementSibling.style.color = "black";
}