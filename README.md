
### What is JSX, and why is it used?

Ans: JSX is a syntax extension for JavaScript that allows you to write HTML-like markup directly within your JavaScript code. It is most commonly associated with the React library for building user interfaces. 

Why JSX is used:
Although not strictly required for React, JSX makes it easier and more intuitive to build user interfaces. Its key benefits include: 

Improved readability: The HTML-like syntax is familiar to developers and provides a clear visual representation of the UI structure directly within the JavaScript logic.

Declarative code: Instead of manually manipulating the Document Object Model (DOM), JSX allows you to declare what the UI should look like based on the current state. This makes your code more predictable and easier to debug.

Seamless integration with JavaScript: With curly braces { }, you can embed dynamic JavaScript expressions directly within your markup. This allows for creating interactive, data-driven interfaces.

Safer code: By default, React escapes any values embedded in JSX before rendering them to help prevent cross-site scripting (XSS) attacks.

Developer experience: Most modern code editors provide built-in syntax highlighting, autocompletion, and error checking for JSX, which streamlines the development process.
Promotes component-based architecture: By keeping the rendering logic and markup together, JSX makes it easy to create modular and reusable components. 


### What is the difference between State and Props?

Ans: The primary difference between state and props in React is how they are managed and modified. Props are for passing data from parent to child components, are read-only, and are immutable. State, conversely, is managed locally within a component, is mutable, and changes over time



### What is the useState hook, and how does it work?

Ans:The useState hook is a function from the React library that allows you to add a state variable to a functional component. This variable can be used to store data that changes over time and affects what is displayed in the user interface, such as a counter's value, a form's input, or a list of items. 

### How can you share state between components in React?

Ans: To share state in React, you can use one of three main methods, depending on your application's complexity:
Lifting State Up: For related components, move the state to their closest common parent component and pass the data down to children as props. This is ideal for simple hierarchies.
React Context: Share "global" state, like user themes or language, across deeply nested components without prop-drilling. This avoids passing props through many layers of components that don't need them.
State Management Libraries: For large, complex applications, use libraries like Redux or Zustand. They manage state in a centralized "store," providing a robust and predictable way to handle interactions across many components.





