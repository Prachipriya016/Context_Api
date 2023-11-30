# Login Form Using Context Api 
A simple login form. It uses the React useState and useContext hooks to manage the state of the form and to set the user in the UserContext.
### Usage
To use the Login component, simply import it into your component and render it. You will also need to provide the UserContextProvider component to your component tree so that the Login component can access the UserContext.
## User Interface (UI) Layer:
The user interacts with the login form presented on the UI.
The form consists of input fields for username and password, and a submit button.

## Component Layer:
The Login component is responsible for rendering the login form.
It manages the component state using the useState hook for username, password, and form visibility (isVisible).
Utilizes the useContext hook to access the UserContext and extract the setUser function.
### Context Layer:
UserContext provides a context for managing user-related data across the application.
The setUser function from the context is used to update user information after form submission.
### Event Handling:
The handleSubmit function is triggered when the user clicks the submit button.
It prevents the default form submission behavior and calls setUser with the entered username and password.
It sets isVisible to false to hide the form after submission.
### Component Lifecycle:
The component lifecycle involves the initial render and subsequent re-renders when the component state changes.
State changes occur when the user types in the input fields or submits the form.
### Conditional Rendering:
The form is conditionally rendered based on the value of isVisible.
If isVisible is true, the form is displayed; otherwise, it is hidden.
### UI Components:
The login form is divided into UI components like input fields and buttons, each styled and organized for clarity.
## State Management:
React state (useState) is used to manage the dynamic aspects of the form, such as user input and form visibility.
