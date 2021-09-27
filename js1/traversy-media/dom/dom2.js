function part2A() {
    console.log("Let's look at how to traverse through DOM.",
        "So basically kind of moving up and down looking at parent",
        "nodes child nodes and siblings. Let us learn how to query ",
        " parents and siblings and children");
    console.log("Let us select ul list and get its parent node.",
        "\nvar listItem = document.querySelector('#items');");
    var listItem = document.querySelector('#items');
    console.log(listItem.parentNode);
    listItem.parentNode.style.backgroundColor = '#f4f4f4';
    console.log("Let us style parentNode \nlistItem.parentNode.style.backgroundColor = '#f4f4f4';");
    console.log("We can actually chain this command get parrent node of the above elemnent.",
        "For example, listItem.parentNode.parentNode gives us parent node of card");
    console.log(listItem.parentNode.parentNode);
    console.log("There is something called parentElement which does the exact same job");
    console.log(listItem.parentElement.parentElement);
    console.log("Let us take a look at child nodes, listItem.childNodes",listItem.childNodes);
    console.log("This returns a nodeList. Notice the first element is text. What's this");
    console.log("Well it represents white spaces between tags. If you don't have spaces" ,
        "between tags then node list will not have text");
    console.log("So, instead we can use listItem.children",listItem.children);
    console.log("Note this is HTMLCollection. It is no more nodelist");
    console.log("There is something called first child and last child");
    console.log(listItem.firstChild, listItem.lastChild);
    console.log("Notice this doesn't have elements instead they both say about space ",
        "between first child element and parent element tag, space b/w last child element and ",
        "parent element tag.");
    console.log("So, to get first and last child element listItem.firstElementChild,",
        "listItem.lastElementChild", listItem.firstElementChild,
        listItem.lastElementChild);
}

function part2B(){
    console.log("Let us look at sibiling.");
    var itemList = document.querySelector('#items');
    console.log("To see the next sibling of list items use itemList.nextSibling",itemList.nextSibling);
    console.log("Note it returns text as there are spaces between them.");
    console.log("To see the next sibling html element use itemList.nextElementSibling",itemList.nextElementSibling);
    console.log("To see the previous sibling html element use itemList.previousElementSibling",itemList.previousElementSibling);
    itemList.previousElementSibling.style.color = "green";
}

function part2C(){
    console.log("Let us create a new div using js.",
        "\nvar newDiv = document.createElement('div'); // creates new div",
        "\nnewDiv.className = 'hello'; // adds class to div",
        "\nnewDiv.id = 'hello1'; //adds id to div",
        "\nnewDiv.setAttribute(\"title\", \"hello div\"); \\ adds title attribute");
    var newDiv = document.createElement('div');
    newDiv.className = 'hello';
    newDiv.id = 'hello1';
    newDiv.setAttribute("title", "hello div");
    console.log("We don't have any text inside div tag. To insert we first create text node and append it to div.",
        "\nvar newDivText = document.createTextNode('Hello World');",
        "\nnewDiv.appendChild(newDivText);",
        "\nnewDiv.style.fontSize = '30px';");
    var newDivText = document.createTextNode('Hello World');
    newDiv.appendChild(newDivText);
    newDiv.style.fontSize = '30px';
    console.log(newDiv);

    console.log("To insert this into header we need to get header and we need to get h1.",
        "\nvar container = document.querySelector('header .container');",
        "\nvar headerH1 = document.querySelector('header h1');");

    var container = document.querySelector('header .container');
    var headerH1 = document.querySelector('header h1');
    console.log("and use insertBefore() which has two properties. first parametertakes new element to ",
        "be inserted and tag before which it should be inserted",
        "\ncontainer.insertBefore(newDiv, headerH1);");
    container.insertBefore(newDiv, headerH1);
}