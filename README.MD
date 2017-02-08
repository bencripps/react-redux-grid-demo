# React-Redux-Grid Examples

A simple app displaying multiple grids with different features.

[Examples Website](http://react-redux-grid.herokuapp.com/)

The relevant (to grid) source code is located in:

`/src/components/examples`

## Getting Started 

```
npm install
npm start
```
This will launch the examples website at http://localhost:3000 as well as a fake data API service on http://localhost:3001 

## Contributing 

To begin creating an example, you can also simply copy an example folder and rename it.

Feel free to install other libraries ( redux-sagas, etc) to demonstrate any new functionality in your example folder.

## Tests

We are using [jest](https://facebook.github.io/) & [enzyme](http://airbnb.io/enzyme) to manage our test suite with the goal of testing each example. We could use help here in testing the examples if you would like to contribute. Don't worry if you've never written tests before, this is good example site to learn. 

When you run the tests, they should all be passing. Please file a bug if you see any failing; better yet fix the fail and push an update! 

```
npm test
```

## Website 

We used [create-react-app](https://github.com/facebookincubator/create-react-app) to build the website adding Redux & React-Redux-Grid. 

You can build this example site by:
```
npm run build 
```

The build folder was added to the repo because it is required by Heroku.

To create your own site:

```
create-react-app folderName 
cd folderName
npm i redux react-redux react-redux-grid redux-logger --save
```

[shields.io](http://shields.io/)

## React-Redux-Grid 

This is examples site but the main library can be found here:

🍴[react-redux-grid on Github](https://github.com/bencripps/react-redux-grid)     
⌛[react-redux-grid on NPM](https://www.npmjs.com/package/react-redux-grid)
