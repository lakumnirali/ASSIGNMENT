import React from 'react';
const Home = () => {
    return (
        <>
            <div className="container p-3">
                <h2>What is Redux?</h2>
                <p>Redux is a predictable state container for JavaScript applications, commonly used with React. It manages the state of an application in a single store, making it easy to track and update the state in a consistent manner. Actions trigger state changes, and the state is modified through pure functions called reducers.</p>
                <br />
                <h2>What is Redux Thunk used for?</h2>
                <p>Redux Thunk is a middleware for Redux that enables the use of asynchronous logic in Redux actions. It allows action creators to return functions instead of plain action objects, enabling the dispatch of multiple actions and asynchronous operations like API calls. This helps manage side effects and asynchronous behavior in Redux applications.</p>
                <br />
                <h2>What is Pure Component? When to use Pure Component over Component?
                </h2>
                <p>
                    In React, a Pure Component is a class component provided by React that automatically implements the shouldComponentUpdate lifecycle method with a shallow prop and state comparison. This means the component will re-render only if its props or state change.

                    Use PureComponent over Component when the component's render output is solely determined by its props and state, and there's no need for a custom shouldComponentUpdate implementation. This can lead to performance optimizations by preventing unnecessary renders when the props and state remain the same. However, it's important to note that the shallow comparison may not be suitable for all scenarios, especially when dealing with complex data structures or objects with nested properties. In such cases, using Component with a manually implemented shouldComponentUpdate method might be more appropriate.</p>
                <h2>What is the second argument that can optionally be passed tosetState and what is
                    its purpose?</h2>
                <p>
                    The second argument that can optionally be passed to setState in React is a callback function. This callback function is executed once the setState operation is completed and the component has been re-rendered.

                    The purpose of this callback is to perform actions or execute code that depends on the updated state. Since setState is asynchronous, using the callback ensures that you're working with the most up-to-date state after the state update has been applied. This can be useful when you need to perform tasks after the state has been updated, such as making additional computations or triggering other actions based on the new state.</p>
            </div>


        </>
    );
};

export default Home;