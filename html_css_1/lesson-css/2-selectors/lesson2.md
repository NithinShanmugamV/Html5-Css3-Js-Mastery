Link to html document : https://nithinshanmugamv.github.io/Html5-Css3-Js-Mastery/html_css_1/lesson-css/2-selectors/selectors2.html

1. In this lesson we will see how to select elements based on relation with other elements. Let us have a p element inside a div whose id is parent.

```
<div id="parent">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ut.</p>
</div>
```

3. We can style p element by giving it a id. But there is another way. We can start selecting div whose id is parent and then selct paragraph item. We need not declare another id for p element if you use this method.

```
<style>
    #parent p {
        color: brown;
    }
    </style>
```

4. Here we are combining two selectors. This is a relational selector. This rule will apply for all p elements inside div whose id is parent.

```
<div id="parent">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ut.</p>
    <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quos!
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, tenetur!</p>
        </p>
    </div>
</div>
```

5. Now we have another div which is inside parent div. This div has <p> element inside. Now, what do you think will happen. As we know all p element inside parent div will be brown no matter whether they are nested or not.
   ![Image](pics/lesson2-1.png?raw=true 'Title')

6. What if we wanted to style p element which is direct child of parent div i.e., we don't want to style other nested p elements. To do that we include > between id and type selector.

```
<style>
    #parent > p {
        color: brown;
    }
</style>
```

![Image](pics/lesson2-2.png?raw=true 'Title')

7. There is also an relative selector to select sibilings.

```
<style>
    #parent + p {
        color: brown;
    }
</style>
```

![Image](pics/lesson2-3.png?raw=true 'Title')
![Image](pics/lesson2-4.png?raw=true 'Title')

This selects next p element. Note, next p element should not be nested and it should be right after parent div.

8. To select all sibilings that is rigtht after parent div:

```
<style>
    #parent ~ p {
        color: brown;
    }
</style>
```

![Image](pics/lesson2-5.png?raw=true 'Title')

Note, sibiling should not be nested
![Image](pics/lesson2-6.png?raw=true 'Title')

9. Relational selectors offers clean markup but it also have some disadvantages. They can be fragile. What does that mean let us take above code. We have a parent div and and p element after that.

```
<head>
    <style>
        #parent > p {
            color: brown;
        }
    </style>
</head>
<body>
    <div id="parent">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ut.</p>
    <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quos!</p>
    </div>
</body>
```

We style first sibiling using relational selector. But next if we move this para up then the style breaks.

10. They are not faster as other selectors. This time is really negligible. Let us see what it is. Imagine there is a div element which has id as parent and it has only 1 para sibiling but the total number of para elements is 100. Let us apply this below style.

```
<style>
    #parent ~ p {
        color: brown;
    }
</style>
```

What browser does it selects all p elements and checks who are all its direct sibiling which comes under parent div. So, it takes lot of time.
