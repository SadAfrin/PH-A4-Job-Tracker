1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer: getElementById returns a single element object where getElementsByClassName returns HTMLCollection by selecting multiple elements with the class name and finally, querySelector / querySelectorAll can use both id and class but the difference is it is static- meaning if you initialized a querySelector / querySelectorAll, and after that you changed the DOM, the value will not be changed where getElementsByClassName is live, it will be changed with the DOM changing. querySelector returns only the first matching element object and querySelectorAll returns all the matching elements NodeList in a array-like.

2. How do you create and insert a new element into the DOM?
   Answer: Using this command "document.createElement("div")" we can create an new element into the DOM. And next for insertion, we need to follow append(). for example, const div = document.createElement("div"); then we add an innerText in div by div.innerText = "Hello World"; (this is optional) and insert following this in the body section document.body.append(div);

3. 
