import React from 'react';

const Question = () => {
    return (
        <div>
            <h4>Q: How React Works?</h4>
            <p>
                <strong>Ans:</strong>
            React is a JavaScript library that creates user interfaces (UIs) in a predictable and efficient way using declarative code
            React is maintained by Facebook. React uses a declarative paradigm that makes it easier to reason about the application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
            </p>

            <h4>Q: How  usestate Works?</h4>
            <p>
                <strong>Ans:</strong>
                useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. ComponentWithHook is a function which returns an object (all JXS calls are translated into objects by this babel plugin)

In ComponentWithHook, we call a function that returns two values which we destructure

Before we go into what happens next, let us remind ourselves of some of the behaviour we expect to see based on how hooks work:

the useState hook ensures React preserves the state between re-renders

hooks should not be called in loops, nested functions or conditions

hooks should not be called outside of function components
            </p>
        </div>
    );
};

export default Question;