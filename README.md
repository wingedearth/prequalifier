# prequalifier

This is a web application that provides an example user interface for prequalifying a loan applicant based on submitted user data.

## Resources

1. [Live Application](https://prequalifier-example.herokuapp.com/)
2. [SCRUM board via Trello](https://trello.com/b/5waLapSL/prequalifier)
3. [GitHub Repository](https://github.com/wingedearth/prequalifier)
4. [Changelog](https://github.com/wingedearth/prequalifier/blob/master/CHANGELOG.md)

## Technologies

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [Node.js](https://nodejs.org) v.10+
3. [Express.js](https://expressjs.com/)
4. [Webpack](https://webpack.js.org/)
5. [React](https://reactjs.org/) v.16.13.0
6. [Babeljs](https://babeljs.io/)
7. [Eslint](https://eslint.org/)
8. [SASS / SCSS](https://sass-lang.com/)
9. [Git](https://git-scm.com/)
10. [Formik](https://jaredpalmer.com/formik), with [Yup](https://github.com/jquense/yup)

## Tech Overview

### Language

Prequalifier relies on universal JavaScript throughout the application, allowing for the ease of using a single langauge and sharing of code between the server and client. Babeljs is used to transpile the JavaScript from both environments for compatibility.

### Back End

This application uses a [Node.js](https://nodejs.org) server with an Express.js framework to serve web pages in response to HTTP requests.

The Node server has a specific endpoint set up for form submissions received by a POST request to a specific endpoint. The server is configured to parse the JSON body, apply logic for validation and business rules, and then send a response with JSON.

Each page available from this application is served by the server. Front end routing is not used.

### Front End

The front end relies upon the [React](reactjs.org/) library. React is used to modularlize components, organize layouts, and generate data driven markup.

Styling of the generated markup relies upon [Sass](https://sass-lang.com/), and in particular, Sass's Sassy Cascading Stylesheets (SCSS) syntax, which allows for the use of some helpful features such as CSS variables.

## Getting Started

Follow the "Live Application" link above to see the latest deployed application live in your browser.

This section will explain how to run this application locally on your own machine.

### Set up your local repository

1. From your terminal (Bash or Zsh), in a directory of your choice, enter the following command, to create a folder called "prequalifier": ```git clone https://github.com/wingedearth/prequalifier.git```

2. Enter ```cd prequalifier``` to enter the folder.

3. Enter ```yarn``` to run yarn, which will install the local NPM package dependencies. If you do not have yarn installed globally on your machine, then first enter ```npm i -g yarn``` to install yarn.

### Build the application

1. Enter ```yarn build``` to run a Webpack build of the application, the proceeds of which will be written to a ```/dist``` folder in the ```prequalifer``` directory. This will run the server and client side builds using Webpack.

2. Enter ```yarn start``` to start the server with Node. Your local server will by default run on port 4000. You can override the port by instead applying an environmental variable named PORT before starting the server. For example, entering ```PORT=3000 yarn start``` would start the server on port 3000.

3. From an Internet browser, navigate to localhost:4000 (or the appropriate port).

4. For a production build, these same commands should be used to build and start, except that an environmental variable, NODE_ENV, must be "production".

### Build the application in watch mode

1. You will need nodemon installed on your machine. If you don't have it, enter ```npm i -g nodemon``` to install it globavlly

2. From the prequalifier folder, enter ```yarn build:dev```. This will run the client and server side builds, both in watch mode.

3. From your terminal, open a separate tab or separate window. Navigate to your prequalifier folder and then enter ```yarn dev```. This will start the server with nodemon, which will auto-restart whenever the server bundle is changed.
