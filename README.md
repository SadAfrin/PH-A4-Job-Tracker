1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
   Answer: getElementById returns a single element object where getElementsByClassName returns HTMLCollection by selecting multiple elements with the class name and finally, querySelector / querySelectorAll can use both id and class but the difference is it is static- meaning if you initialized a querySelector / querySelectorAll, and after that you changed the DOM, the value will not be changed where getElementsByClassName is live, it will be changed with the DOM changing. querySelector returns only the first matching element object and querySelectorAll returns all the matching elements NodeList in a array-like.


2. How do you create and insert a new element into the DOM?
   
   Answer: Using this command "document.createElement("div")" we can create an new element into the DOM. And next for insertion, we need to follow append(). for example, const div = document.createElement("div"); then we add an innerText in div by div.innerText = "Hello World"; (this is optional) and insert following this in the body section document.body.append(div);


3. What is Event Bubbling? And how does it work?

   Answer: Event Bubbling is a process when you are on a target element, it bubbles up to the parent element like from a tree branch to its root. suppose, you click on a button then the bubbling event is started and step by step it will go to its parent section like- button → div → body → document.


4. What is Event Delegation in JavaScript? Why is it useful?

   Answer: Event delegation is when you put an event listener on a parent element to handle events for its child elements. It is useful because it saves memory and works even for elements added later dynamically.

5. What is the difference between preventDefault() and stopPropagation() methods?

   Answer: The main difference between preventDefault() and stopPropagation() methods is- preventDefault() stops the element’s default action, and stopPropagation() stops the event from reaching parent elements.
