Link to html document : https://nithinshanmugamv.github.io/Html5-Css3-Js-Mastery/html_css_1/lesson-css/2-selectors/selectors3.html

1.In this lesson we will see how about pseudo selectors. Let us define a div with two paragraphs.

```
<div id="product">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, a.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, quos.</p>
</div>
```

2. If you want to style first paragraph you may either give that paragraph element an id(or class) or you may use relational selector.

3. This is little unnecessary. By default browser applies css classes called pseudo classes. We can use them to style our elements.

```
<style>
    div :first-child {
        color: chocolate;
        font-style: italic;
        font-size: 20px;
    }
</style>
```

This styles first child of div element. It may be p tag or span tag or anything. Note this code is little fragile. You may have p tag as first child and use pseudo class o style it. Later you decide to insert a new tag in this place. Then the style will be applied to new element.

```
<style>
    div :first-of-type {
        color: chocolate;
        font-style: italic;
        font-size: 20px;
    }
</style>
```

5. The above code styles all the first occurences of tags that comes inside div element. Now to apply this style to first occurence of the p tag

```
<style>
    div p:first-of-type {
        color: chocolate;
        font-style: italic;
        font-size: 20px;
    }
</style>
```

6. There is two other selectors last-child, last-of-type that works similarly like this. last-child styles last occurnce of the container tag whereas last-of-type styles all the last occurence of elements.

```
<style>
    div p:last-child {
        color: chocolate;
        font-style: italic;
        font-size: 20px;
    }
</style>
```

7. Consider the above code. This code checks whether our last child of div is p tag and if yes it applies the style. In our html document last child of div is article. So this rule breaks.
