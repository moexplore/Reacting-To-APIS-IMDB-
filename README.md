Reacting to APIs
We're gonna be building a web application that is going to display all animated movies made by Studio Ghibli. Think of this as a mini-version of IMDB (https://www.imdb.com/)! It's just dedicated to all things Studio Ghibli rather than all movies ever. In this lab assignment, your primary objective is to request data from a third-party API, handle the response, and then display the data in the browser with React. We're gonna be using this free REST API that catalogues every resource you could ever need to know about the Studio Ghibli films. Take a minute to scroll through the documentation of the website to familiarize yourself with the data and see if you can determine what endpoints are exposed in the API.

 

Getting Started (same way you've built the previous two React labs)
Create a new project with Create React App.
Delete the src and public directory and all of its contents.
Create a new public directory and a new index.html file inside of public.
Use the ! emmet shortcut to generate a fresh html document in the index.html file. Place <div id="root"></div> in the <body> of the html document you created. (like we did in earlier videos!)
Create a new src directory and a components directory inside of src.
Create an App.jsx and a index.js file inside of src.
Write the basic "entry point" code for the index.js file, avoid copy/paste so you can practice writing it yourself!
// inside of src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
Write a simple function component that returns some JSX for your App.jsx file.
// inside of /src/App.jsx
import React from 'react';

const App = () => {
    return (
        <div>
            <h1>Hello from App Component!</h1>
        </div>
    );
};

export default App;
 

You should now have a project structure that resembles the following:

node_modules/
public/
|- index.html
src/
|- components/
|- App.jsx
|- index.js
.gitignore
package-lock.json
package.json
README.md
 

Instructions
Head to the REST API https://ghibliapi.herokuapp.com/ and in particular, pay attention to the two endpoints we're going to be using: /films and /people in this lab. When exploring the endpoints, examine the properties each film or person has. This way when we eventually fetch this data in React, set it to state, and map through it, you'll have a good idea of the properties you'll be displaying.

Explore the films endpoint: https://ghibliapi.herokuapp.com/films
Explore the people endpoint: https://ghibliapi.herokuapp.com/people
Before we begin fetching data, let's set up our app with a conditional render. You'll want a home page that shows one button at first that says Load Films. Have this button change the conditional render when clicked. The eventual goal will be to render a list of Film data when the Film button is clicked.

From here, task is to retrieve all films from the Ghibli REST API, and then parse the response to display a "card" for each film. You will need to use the fetch() method in order to do this, and you should invoke fetch when the component is mounted to the application via a useEffect and set to state with a useState hook.

Remember the films data should only display when the Load Films button is clicked!
Consider styling your card at this point so that it is easier to read. Bootstrap v4/v5 should make this pretty easy for you. At a minimum, you should display the film title and description, but you may use as many properties as you want.

The next task is to add another button next to Load Films that says Load People. This button, when clicked, should trigger a different conditional render. We'll be using this new conditional render to retreive and display people data from the Ghibli REST API.

Finally repeat the same process froim step 3 that you did for films with this people endpoint. At a minimum, you should display the person's name, age, gender, and a link to that particular person's JSON response that will open in a new tab, but you may use as many properties as you want.

 

Closing Remarks
And that's all for this lab! The great thing about APIs, though, is that they give you creative freedom to use the data as much as you see fit, so if you have another idea of how to manipulate this data and display it for your "users", then go right ahead! We're looking forward to seeing what you create.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
