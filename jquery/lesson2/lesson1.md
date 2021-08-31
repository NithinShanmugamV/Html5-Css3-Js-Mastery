1. First let us create a html to work with jquery.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jquery</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style type="text/css">
    	body {
    		font-size: 17px;
    		font-family: arial;
    		background-color: #f4f4f4;
    		line-height: 1.5em;
    		margin: 0px;
    	}
    	header {
    		background-color: #0066cc;
            text-align: center;
            color: white;
            padding: 20px;
            border-bottom: 4px black solid;
            margin-bottom: 20px;
        }
        #container {
        	width: 90%;
        	margin: auto;
        	padding: 10px;
        }
    </style>
</head>

<body>
    <header>
        <h1>Learning jQuery</h1>
    </header>
    <div id="container">
        <h2 id="heading1" class="heading headingclass1">Heading One</h2>
        <p>
        	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos blanditiis distinctio a illo deleniti, laboriosam commodi qui voluptatem fugit, deserunt reprehenderit. Accusantium alias commodi molestiae et, minima? Quam cumque, repudiandae, eum eligendi debitis officia quos alias similique pariatur nobis cupiditate, <span>sit facere accusamus veniam?</span> Sapiente sunt dolore nam dicta eum.
        </p>
        <h2 id="heading2" class="heading headingclass2">Heading Two</h2>
        <p>
        	Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis dolores necessitatibus esse, fuga velit culpa beatae blanditiis illum maiores perferendis, cum magnam. Ullam nulla illum enim maiores in, iure, perspiciatis eligendi nisi, eos soluta, optio delectus reprehenderit recusandae sed. Aspernatur, rerum. <span>Minima, distinctio, harum?</span> Impedit sed nam iusto necessitatibus!
        </p>
        <ul id="list">
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
        </ul>
        <input type="button" value="Button 1">
		<input type="submit" value="Submit">
		<input type="text">
    </div>
    <script type="text/javascript">
    </script>
</body>

</html>
```

2. To hide all h2 elements
```
<script type="text/javascript">
    $('h2').hide(); 
 </script>
```

3. To hide h2 element whose id 'heading1'
```
<script type="text/javascript">
    $('h2#heading1').hide();
</script>

```

4. To hide h2 element whose class 'heading'
```
<script type="text/javascript">
    $('h2.heading').hide();
</script>

```

5. To hide h2 element whose class 'headingclass2'
```
<script type="text/javascript">
    $('h2.headingclass2').hide();
</script>

```

6. Actually we have heading class applied to only headings so you can simplify code by:
```
<script type="text/javascript">
    $('.headingclass2').hide();
</script>

```

7.  We have p tag which has span tag inside it. So, we can select them by the following:
```
<script type="text/javascript">
    $('p span').css('color', 'red');
</script>
```
.css() applies css rule to selected tags. In this case it gives red color to all span elements.

8. Note the above code only selects span tags inside p tag. To select all span tags:
```
<script type="text/javascript">
    $('span').css('color', 'red');
</script>
```

9. We can also use css3 selectors. Lets say we need to select first and last item give it a color red:
```
<script type="text/javascript">
    $('#list li:first').css('color', 'red');
    $('#list li:last').css('color', 'red'); 
</script>
```

10. To select all odd list items and give it a background colour green and select even list items and give colour blue:
```
<script type="text/javascript">
    $('#list li:first').css('color', 'red');
    $('#list li:last').css('color', 'red'); 
</script>
```

11. To select third list item and give it a background colour:
```
<script type="text/javascript">
    $('#list li:first').css('color', 'red');
    $('#list li:last').css('color', 'red');
    $('ul#list li:nth-child(3)').css('background-color', 'grey'); 
</script>
```

12. To select list item whose occurence is multiple of 3 and remove its bullets:
```
<script type="text/javascript">
    $('#list li:first').css('color', 'red');
    $('#list li:last').css('color', 'red');
    $('ul#list li:nth-child(3)').css('background-color', 'grey'); 
    $('ul#list li:nth-child(3n)').css('list-style', 'none'); 
</script>
```

13. We can also use type attributes select items. To hide all elements that has type as submit
```
<script type="text/javascript">
    $(':submit').hide();
</script>
```

14. We can target values of an attribute:
```
<script type="text/javascript">
    $('[href]').css('color', 'red');
	$('a[href="http://yahoo.com"]').css('color', 'green');
</script>
``` 

15. '$('*').hide();'' hides all elements