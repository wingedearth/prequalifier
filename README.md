# prequalifier

This is a web application that provides an example user interface for prequalifying a loan applicant based on submitted user data.

## Resources

1. [Live Application](https://prequalifier-example.herokuapp.com/)
2. [SCRUM board via Trello](https://trello.com/b/5waLapSL/prequalifier)
3. [GitHub Repository](https://github.com/wingedearth/prequalifier)
4. [Changelog](https://github.com/wingedearth/prequalifier/blob/master/CHANGELOG.md)

## Technologies

1. JavaScript
2. Node.js v.10+
3. Express.js
4. Webpack
5. React
6. Babeljs
7. Eslint
8. SASS / SCSS


## Getting Started

Follow the "Live Application" link above to see the latest deployed application live in your browser.

If you would like to run this application locally on your own machine, follow these instructions:

1. From your terminal, in a directory of your choice, enter the following command:

```git clone https://github.com/wingedearth/prequalifier.git```

This will create a folder called "prequalifier".

2. Enter ```cd prequalifier``` to enter the folder.

3. Enter ```yarn``` to run yarn, which will install the local NPM package dependencies. If you do not have yarn installed globally on your machine, then first enter ```npm i -g yarn``` to install yarn.

4. Enter ```yarn build``` to run a Webpack build of the application, the proceeds of which will be written to a ```/dist``` folder in the ```prequalifer``` directory.

5. Enter ```yarn start``` to start the server. Your local server will by default run on port 4000. You can override the port by instead applying an environmental variable named PORT before starting the server. For example, entering ```PORT=3000 yarn start``` would start the server on port 3000.

6. From an Internet browser, navigate to localhost:4000 (or the appropriate port).
