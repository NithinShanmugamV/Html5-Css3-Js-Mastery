function part1A() {
    console.clear();
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
    var headerTitle = document.getElementById('header-title');
    console.log("Lets get elements using their id document.getElementById('header-title'): ",
    	headerTitle);
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
    console.log("Let's use getElementsByClassName to get all list items.");
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
    console.log("Let's use getElementsByTagName to get all list items.");
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
    console.log("Let's look at query selector. We will select header and give some border.",
        "\nvar header = document.querySelector('#main-header');",
        "\nheader.style.borderBottom = 'solid 3px #000';");
    var header = document.querySelector('#main-header');
    console.log("Note you can use any CSS selectors inside querySelector('USE_CSS_SELECTOR')");
    header.style.borderBottom = 'solid 3px #000';
    var input = document.querySelector('input');
    input.value = "Enter input";
    console.log("Even though there are two input values query selector by ",
        "default select only first value");

}

function reset(){
    console.clear();
    var headerTitle = document.getElementById('header-title');
    var mainTitle = document.getElementById('main-title');
    var formTitle = document.getElementById('form-title');
    var items = document.getElementsByClassName('list-group-item');
    var header = document.getElementById('main-header');
    header.style.borderBottom = '0';
    headerTitle.innerHTML = 'Item Listener <span class="p-2 bg-dark text-white h-10" style="display: none;"> DOM</span>';
    mainTitle.innerHTML = 'Add items<span class="p-2 bg-dark text-white h-10" style="display: none;"> DOM</span>';
    formTitle.innerHTML = 'Items';
    items[0].textContent = "items1";
    items[1].style.fontWeight = 'normal';
    items[2].style.color = 'black';
    for(i of items){
        i.style.backgroundColor = '#f4f4f4';
    }
}