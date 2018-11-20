// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js';

// ReactDOM.render(<App />, document.getElementById('app')); common for every place

///ReactDOM.render(<App headerProp = "Header from props..." contentProp = "Content from props..."/>, document.getElementById('app')); 
//the above line statment we are passing props values 


//only for routers below code
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route,  browserHistory } from 'react-router'
// import Home from './App/Home/Home.js'
// import About from './App/About/About.js'
// import Contact from './App/Contact/Contact.js'
// import App from './App';


// ReactDOM.render((
//     <Router history = {browserHistory}>
//        <Route path = "/" component = {App}>
//           {/* <IndexRoute component = {Home} /> */}
//           <Route path = "home" component = {Home} />
//           <Route path = "about" component = {About} />
//           <Route path = "contact" component = {Contact} />
//        </Route>
//     </Router>
//  ), document.getElementById('app'))

//react js with redux

import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.js'
import todoApp from './reducers/reducers'

let store = createStore(todoApp)
let rootElement = document.getElementById('app')

render(
   <Provider store = {store}>
      <App />
   </Provider>,
	
   rootElement
)

