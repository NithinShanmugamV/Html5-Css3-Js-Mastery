1 . What is a selector in css. In css we have few ways to select elements and style them. They are:
*Type
*ID
*Class
*Attribute

```
<style>
    body {
        margin: 10px;
    }
    p {
        color: orange;
    }
</style>
```

2. Here we are selecting body and p using type selectors. In the example we used type selector where we asked to select all the paragraph items and give orange colour to them. Also, we asked all elements in body tag to give 10px of padding.

```
<head>
    <style>
        .paraitem {
            color: orange;
        }
    </style>
</head>
<body>
    <p class="paraitem">
    <p class="paraitem">
    <p class="paraitem">
</body>
```

3. Here we are selecting p using class selectors. In the example we used class selector where we asked to select all that has class "paraitem" and give orange colour to them. We declare this rule in css like this .class_name{}. Note, We have 3 p tags with same class which applies same styling for these 3 tags. We can use same class for multiple tags as it is used to group tags which are similar.

```
<head>
    <style>
        #paraitem {
            color: orange;
        }
    </style>
</head>
<body>
    <p id="paraitem">
</body>
```

4. Here we are selecting p using id selectors. In the example we used id selector where we asked to select paragraph tag that has id "paraitem" and give orange colour to them. We declare this rule in css like this #class_name{}. Note, We cannot have multiple tags with same id. Id is supposed to be used for only one tag. Unlike class id should be unique. For example consider these tags as 2 same cars belongs to same model. Eventhough they are same car they cannot have same vehicle number.

```
<head>
    <style>
        a[target]  {
            color: orange;
        }


        a[href="https://github.com/NithinShanmugamV"]  {
            color: green;
        }


        a[href *= "tab=repositories"]  {
            color: mediumvioletred;
        }


        a[href ^= "www"]  {
            color: brown;
        }


        a[href $= ".in"]  {
            color: orangered;
        }


        a[href ^= "https"][href $= ".in"][href *= "amazon"]  {
            color: purple;
        }
    </style>
</head>
<body>
    <a href="https://github.com/NithinShanmugamV" target="_blank"><a href="https://github.com/NithinShanmugamV"></a>
    <a href="github.com/NithinShanmugamV"><a href="github.com/NithinShanmugamV"></a>
    <a href="https://github.com/NithinShanmugamV?tab=repositories"><a href="https://github.com/NithinShanmugamV?tab=repositories"></a>
    <a href="github.com/NithinShanmugamV?tab=repositories"><a href="github.com/NithinShanmugamV?tab=repositories"></a>
    <a href="www.webwhatsapp.com"><a href="www.webwhatsapp.com></a>
    <a href="www.amazon.in"><a href="www.amazon.in></a>
    <a href="https://www.amazon.in"><a href="https://www.amazon.in></a>
</body>
```

5. Here we are selecting links using Attribute selectors. In the example we used attribute selector where we asked to select link which has target attribute. We can also select attribute which has particular values.

See second rule it selects all links which navigates to https://github.com/NithinShanmugamV.

Note first two links even though they navigates to same page they are not given same styling. Because second link doesn't have https:// . So to avoid this and select all links which navigates to same page even though they have some url difference we can style like third rule.

Also we can select links which starts with specific pattern and ends with specific pattern. See forth and fifth rule.

We can also combine two are three rules. See sixth rule.
