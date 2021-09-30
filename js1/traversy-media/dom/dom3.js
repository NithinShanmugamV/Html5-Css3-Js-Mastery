function part3A() {
	console.log("Let's add a event here. I want to execute function buttonClick ",
		"if button click me is clicked. So to do this by event listener ",
		"\nvar button = document.getElementById('button').addEventListener('click', function(){",
		"\n  console.log('123');",
		"\n});" 
	);
	var button = document.getElementById('button').addEventListener('click', buttonClick);
	function buttonClick(event) {
		document.getElementById('header-title').textContent = 'Changed';
		document.querySelector('#main').style.backgroundColor = '#f4f4f4';
		console.log("let us see what is an event parameter. Note the first paramter of the function will be event paramter. You can name it e or anything you want.");
		console.log("event",event);
		console.log("\nevent.target //returns html element of buttton that is clicked",event.target);
		console.log("\nevent.target.id //returns id of target",event.target.id);
		console.log("\nevent.target.className // returns class of target",event.target.className);
		console.log("\nevent.target.classList //returns classes in form of list",event.target.classList);
		console.log("\nevent.type //returns type of target", event.type);
		console.log("\nTo get x-axis and y-axis of mouse position with respect to window event.clientX",event.clientX,"event.clientY",event.clientY);
		console.log("\nTo get x-axis and y-axis of mouse position with respect to element event.offsetX",event.offsetX,"event.offsetY",event.offsetY);
		console.log("We can also add the output in a div");
		console.log("\nevent.ctrlKey //checks ctrl key pressed when clicking",event.ctrlKey,
		 	"\nevent.shiftKey //checks ctrl key pressed when clicking",event.shiftKey,
		 	"\nevent.altKey //checks ctrl key pressed when clicking",event.altKey);
		var output = document.getElementById("output");
		output.innerHTML ='<h3>'+'id: '+event.target.id+'\nclass: '+event.target.className+'</h3>';
	}
}

function part3B() {
	var button = document.getElementById('button');
	var box = document.getElementById('box');
	var output = document.getElementById('output');
	console.log("Let us see mouse events. Write a function that prints type of event that fires. ",
		"function runEvent(event) { console.log(\"EVENT TYPE:\", event.type);}");
	console.log("button.addEventListener('click', runEvent); //fires when mouse clicks button",
		"\nbutton.addEventListener('dblclick', dblRunEvent); //fires when mouse double clicks button",
		"\nbutton.addEventListener('mousedown', runEvent) //fires when mouse clicks button",
		"\nbutton.addEventListener('mouseup', runEvent) //fires when mouse clicks and leaves button",
		"\nbutton.addEventListener('mouseenter', ruEvent) //fires when mouse enters an area",
		"\nbutton.addEventListener('mouseleave', ruEvent) //fires when mouse leaves an area",
		"\nbutton.addEventListener('mouseover', ruEvent) //fires when mouse is over an area",
		"\nbutton.addEventListener('mouseout', ruEvent) //fires when mouse leaves an area");
	console.log("What's the difference between mouse enter and mouse leave. Let us consider a div which has another div inside.<div id='parent'><div id ='child'>hello</div></div>",
		"and we are adding event listener to parent div. Note even though child element is inside parent div when mouse enters child div, browser prints that mouse left.",
		"This is because mouseenter and mouseleave will not be applied for child nodes that are inside to parent node. To solve this we have mouseover and mouseout.");
	console.log("mmousemove event retruns true if mouse moves within the element to which event listener is added.")
	button.addEventListener('click', runEvent);
	button.addEventListener('dblclick', dblRunEvent);
	button.addEventListener('mousedown', runEvent);
	button.addEventListener('mouseup', runEvent);
	box.addEventListener('mouseenter',runEvent);
	box.addEventListener('mouseleave',runEvent);
	box.addEventListener('mouseover',runEvent);
	box.addEventListener('mouseout',runEvent);
	box.addEventListener('mousemove',moveEvent);
	function runEvent(event) {
		console.log("EVENT TYPE:", event.type);
	}
	function dblRunEvent(event){
		console.log("DOUBLE CLICK EVENT TYPE:", event.type);
	}
	function moveEvent(event){
		//console.log("EVENT TYPE:", event.type);
		output.innerHTML = '<h3>Mouse X Position: '+event.offsetX+'</h3><h3>Mouse Y Position: '+event.offsetY+'</h3>';
		box.style.backgroundColor = "rgb("+event.offsetX+","+event.offsetY+",40)";
	}
}

function part3C(){
	var itemInput = document.querySelector('input[type="text"]');
	var form = document.querySelector('form');
	console.log("Event listener is added to input field. itemInput.addEventListener('keydown',runEvent);//fires for each letter typed in input field.",
		"To get what we type in field, we include 'console.log(event.target.value);' statement in func to get value.");
	console.log("itemInput.addEventListener('keyup',runEvent); //fires when key pressed is released",
		"\nitemInput.addEventListener('keyup',runEvent); //fires when any key is pressed");
	console.log("itemInput.addEventListener('focus',runEvent); //fires when input text field is clicked for typing, which means this event will fires",
		" when you click filed for typing.");
	console.log("itemInput.addEventListener('blur',runEvent); // fires when text field is clicked out");
	console.log("itemInput.addEventListener('cut',runEvent); //fires when text is cut by user.",
		"\nitemInput.addEventListener('paste',runEvent); //fires when text is paste by user",
		"\nitemInput.addEventListener('paste',runEvent); //fires whenever you do something with input");
	console.log("Let us include a dropdown menu using select tag and give it three opions. Now,",
		"\nselect.addEventListener('change',runEvent); //runs whenever option is changed");
	console.log("form.addEventListener('submit',runEvent);//fires whenever it submits");
	console.log("Note it doesn't print anything but instead it reloads the page. This is because whenever form submits it reloads.",
		"So to prevent this ");
	//itemInput.addEventListener('keydown',runEvent);
	itemInput.addEventListener('keyup',runEvent);
	//itemInput.addEventListener('keypress',runEvent);
	itemInput.addEventListener('focus',runEvent);
	itemInput.addEventListener('blur',runEvent);
	itemInput.addEventListener('cut',runEvent);
	itemInput.addEventListener('paste',runEvent);
	itemInput.addEventListener('input',runEvent);
	output = document.getElementById('output');
	var select = document.querySelector('select');
	select.addEventListener('change',runEvent);
	select.addEventListener('input',runEvent);
	form.addEventListener('submit',runEvent);
	function runEvent(event) {
		console.log("EVENT TYPE:", event.type);
		console.log(event.target.value);
		output.innerHTML = '<h3>' +event.target.value+'</h3>';
		event.preventDefault();
		if (event.type == 'cut') {
			alert("Text is cut");
			//document.querySelector('input').value = "Cut";
		}
		else if (event.type == 'paste') {
			alert("Text is paste");
			//document.querySelector('input').value = "Cut";
		}
	}
}