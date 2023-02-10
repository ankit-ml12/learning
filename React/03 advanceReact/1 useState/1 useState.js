import React from 'react'
let title = 'Random Words'

const ErrorExample = () => {
  const helper = () => {
    title = 'smart People'
    console.log(title)
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={helper}>
        Generate Now
      </button>
    </React.Fragment>
  )
}

export default ErrorExample

//when we write this code and try to click on button in hope that title will change but it will not happen
//reason is
//we are not re rendering the component
// because we can't send title in return function
// so we will use useState check 2nd file

// =======================================================
;`
Initial Render and Re-Renders
In a React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as "mounting" the components.

Re-renders, on the other hand, happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

There are a few ways that you can trigger a re-render in a React component:

By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.

When the parent element re-renders, even if the component's state or props have not changed.
`
