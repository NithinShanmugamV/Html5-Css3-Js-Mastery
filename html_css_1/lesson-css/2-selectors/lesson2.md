Link to html document : https://nithinshanmugamv.github.io/Html5-Css3-Js-Mastery/html_css_1/lesson-css/2-selectors/selectors1.html

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
   ![Image](pics/lesson2-1.png)

6. What if we wanted to style p element which is direct child of parent div i.e., we don't want to style other nested p elements. To do that we include > between id and type selector.

```
<style>
    #parent > p {
        color: brown;
    }
</style>
```

![Image](pics/lesson2-2.png)

7. There is also an relative selector to select sibilings.

```
<style>
    #parent + p {
        color: brown;
    }
</style>
```

![Image](pics/lesson2-3.png)
![Image](pics/lesson2-4.png)

This selects next p element. Note, next p element should not be nested and it should be right after parent div.

8. To select all sibilings that is rigtht after parent div:

```
<style>
    #parent ~ p {
        color: brown;
    }
</style>
```

![Image](pics/lesson2-5.png)

Note, it should sibiling should not be nested