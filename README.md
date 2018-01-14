## Requirements

Requirements

* Use React. ✔️
* Use create-react-app, i.e. do not use Webpack or any complicated setup. ✔️
* Use Redux to store the state of the feedback popup, but do not be afraid 
to use local component state as well. Please justify why you used Redux
and component state. ✔️
```
I used both redux & local state. Things like "rating" & "closed" are saved to redux store, because these are the longterm data
that will likely be persisted. Also, redux provides nice separation of concerns compered to component state. I have one main container 
component, App.js that is connected to redux. 

I also used component state on Popup component for "suggestedRating" because this is the short-term state that will change 
rapidly - data that represent only part of an atomic change to the state.
```
* Use redux-thunk, redux-saga or similar to handle asynchronous actions. ✔️
```
I used redux-thunk
```
* Use git and commit your work often with meaningful messages. ✔️

##Basic tasks

*. Create React components based on the provided design (design.png). Use
the provided SVG icons. ✔️
*. Implement rating: send selected rating to the API (described below) when
the user clicks on one of the stars and hide the popup. ✔️
*. Implement closing the popup: send the closed preference to the API and
hide the popup. ✔️
*. Show the popup only if no rating has been given and the popup hasn’t been
closed. This means you need to fetch the feedback and closed preference
before you can determine whether the popup should be visible. ✔️

##Bonus tasks

* Write some simple unit tests for your components using Jest and enzyme
(if you wish to use it) ✔️
```
I wrote tests for all actions, reducers and components. 
```
* Describe how you would optimise the size of the resulting JS bundle as
much as possible and what might be the drawbacks. ✔️
```
For the most optimization techniques, wi would need to "npm eject". The main drowback is of course handling weback configuration
by ourselves :). After that, we could utilize several techniques like:

- CODE SPLITTING & CASHING
Instead of ending up with one huge bundle.js, we can split our app and vendor code into separate files.
We can do that by defining an entry point for our app code and then using a CommonsChunkPlugin to bundle 
everything from node_modules into vendor.

- DYNAMIC IMPORT & LAZY-LOADING
We could use import() syntax to dynamicly load components once they are required.

- ENABLE GZIP COMPRESSION ON OUR WEBSERVER
```
* Improve the accessibility of your solution. Ensure that users of screenreaders
can easily use the rating popup.  ❌

## Folder Structure

After creation, your project should look like this:

```
hundred5/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    actions
    components
    helpers
    reducers
    index.css
    index.js
    registerServiceWorker.js
    setupTests.js
```

## Available Scripts

**NOTE: Before you run any of the scripts, be sure to run ```npm install``` first!**

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**