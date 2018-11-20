// import React from 'react';

// class App extends React.Component {
//    render() {
//     var i = 1;
//     var myStyle = {
//         fontSize: 100,
//         color: '#FF0000'
//      }
//       return (
          
//          <div>
//             <h1>Header</h1>
//             <h2>Content</h2>
//             <p>This is the content!!!</p>
//             <h1>{1+1}</h1>
//             <h1>{i == 1 ? 'True!' : 'False'}</h1> 
//             <h1 style = {myStyle}>Header</h1>
//          </div>
//       );
//    }
// }
// export default App;
// 

// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <Header/>
//             <Content/>
//          </div>
//       );
//    }
// }
// class Header extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Header</h1>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <h2>Content</h2>
//             <p>The content text!!!</p>
//          </div>
//       );
//    }
// }
// export default App;

//React Components

// import React from 'react';

// class App extends React.Component {
//    constructor() {
//       super();
//       this.state = {
//          data: 
//          [
//             {
//                "id":1,
//                "name":"Foo",
//                "age":"20"
//             },
//             {
//                "id":2,
//                "name":"Bar",
//                "age":"30"
//             },
//             {
//                "id":3,
//                "name":"Baz",
//                "age":"40"
//             }
//          ]
//       }
//    }
//    render() {
//       return (
//          <div>
//             <Header/>
//             <table>
//                <tbody>
//                   {this.state.data.map((person, i) => <TableRow key = {i} 
//                      data = {person} />)}
//                </tbody>
//             </table>
//          </div>
//       );
//    }
// }
// class Header extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Header</h1>
//          </div>
//       );
//    }
// }
// class TableRow extends React.Component {
//    render() {
//       return (
//          <tr>
//             <td>{this.props.data.id}</td>
//             <td>{this.props.data.name}</td>
//             <td>{this.props.data.age}</td>
//          </tr>
//       );
//    }
// }
// export default App;

//React states.


// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
		
//       this.state = {
//          header: "Header from state...",
//          content: "Content from state..."
//       }
//    }
//    render() {
//       return (
//          <div>
//             <h1>{this.state.header}</h1>
//             <h2>{this.state.content}</h2>
//          </div>
//       );
//    }
// }
// export default App;

//React props

// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>{this.props.headerProp}</h1>
//             <h2>{this.props.contentProp}</h2>
//          </div>
//       );
//    }
// }
// export default App;

//Sates and props

// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          header: "Header from props...",
//          content: "Content from props..."
//       }
//    }
//    render() {
//       return (
//          <div>
//             <Header headerProp = {this.state.header}/>
//             <Content contentProp = {this.state.content}/>
//          </div>
//       );
//    }
// }
// class Header extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>{this.props.headerProp}</h1>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <h2>{this.props.contentProp}</h2>
//          </div>
//       );
//    }
// }
// export default App;


//set state and component API

// import React from 'react';

// class App extends React.Component {
//    constructor() {
//       super();
		
//       this.state = {
//          data: []
//       }
	
//       this.setStateHandler = this.setStateHandler.bind(this);
//    };
//    setStateHandler() {
//       var item = "setState..."
//       var myArray = this.state.data.slice();
// 	  myArray.push(item);
//       this.setState({data: myArray})
//    };
//    render() {
//       return (
//          <div>
//             <button onClick = {this.setStateHandler}>SET STATE</button>
//             <h4>State Array: {this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default App;


//Component Life cycle
// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 0
//       }
//       this.setNewNumber = this.setNewNumber.bind(this)
//    };
//    setNewNumber() {
//       this.setState({data: this.state.data + 1})
//    }
//    render() {
//       return (
//          <div>
//             <button onClick = {this.setNewNumber}>INCREMENT</button>
//             <Content myNumber = {this.state.data}></Content>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    componentWillMount() {
//       console.log('Component WILL MOUNT!')
//    }
//    componentDidMount() {
//       console.log('Component DID MOUNT!')
//    }
//    componentWillReceiveProps(newProps) {    
//       console.log('Component WILL RECIEVE PROPS!')
//    }
//    shouldComponentUpdate(newProps, newState) {
//       return true;
//    }
//    componentWillUpdate(nextProps, nextState) {
//       console.log('Component WILL UPDATE!');
//    }
//    componentDidUpdate(prevProps, prevState) {
//       console.log('Component DID UPDATE!')
//    }
//    componentWillUnmount() {
//       console.log('Component WILL UNMOUNT!')
//    }
//    render() {
//       return (
//          <div>
//             <h3>{this.props.myNumber}</h3>
//          </div>
//       );
//    }
// }
// export default App;


//Forms
// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };
//    updateState(e) {
//       this.setState({data: e.target.value});
//    }
//    render() {
//       return (
//          <div>
//             <input type = "text" value = {this.state.data} 
//                onChange = {this.updateState} />
//             <h4>{this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default App;

//complex example in forms passing child input value and render on the screen

// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };
//    updateState(e) {
//       this.setState({data: e.target.value});
//    }
//    render() {
//       return (
//          <div>
//             <Content myDataProp = {this.state.data} 
//                updateStateProp = {this.updateState}></Content>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <input type = "text" value = {this.props.myDataProp} 
//                onChange = {this.props.updateStateProp} />
//             <h3>{this.props.myDataProp}</h3>
//          </div>
//       );
//    }
// }
// export default App;

// onclick event
// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };
//    updateState() {
//       this.setState({data: 'Data updated...'})
//    }
//    render() {
//       return (
//          <div>
//             <button onClick = {this.updateState}>CLICK</button>
//             <h4>{this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default App;

//refs
// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
		
//       this.state = {
//          data: ''
//       }
//       this.updateState = this.updateState.bind(this);
//       this.clearInput = this.clearInput.bind(this);
//    };
//    updateState(e) {
//       this.setState({data: e.target.value});
//    }
//    clearInput() {
//       this.setState({data: ''});
//       ReactDOM.findDOMNode(this.refs.myInput).focus();
//    }
//    render() {
//       return (
//          <div>
//             <input value = {this.state.data} onChange = {this.updateState} 
//                ref = "myInput"></input>
//             <button onClick = {this.clearInput}>CLEAR</button>
//             <h4>{this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default App;

//keys

// import React from 'react';

// class App extends React.Component {
//    constructor() {
//       super();
		
//       this.state = {
//          data:[
//             {
//                component: 'First...',
//                id: 1
//             },
//             {
//                component: 'Second...',
//                id: 2
//             },
//             {
//                component: 'Third...',
//                id: 3
//             }
//          ]
//       }
//    }
//    render() {
//       return (
//          <div>
//             <div>
//                {this.state.data.map((dynamicComponent, i) => <Content 
//                   key = {i} componentData = {dynamicComponent}/>)}
//             </div>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <div>{this.props.componentData.component}</div>
//             <div>{this.props.componentData.id}</div>
//          </div>
//       );
//    }
// }
// export default App;

//routers
// import React from 'react';

// class App extends React.Component {
//     render() {
//        return (
//           <div>
//              <ul>
//              <li>Home</li>
//              <li>About</li>
//              <li>Contact</li>
//              </ul>
//              {this.props.children}
//           </div>
//        )
//     }
//  }
//  export default App;

//react js with redux

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { addTodo } from './actions/actions'

// import AddTodo from './components/AddTodo.js'
// import TodoList from './components/TodoList.js'

// class App extends Component {
//    render() {
//       const { dispatch, visibleTodos } = this.props
      
//       return (
//          <div>
//             <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
//             <TodoList todos = {visibleTodos}/>
//          </div>
//       )
//    }
// }
// function select(state) {
//    return {
//       visibleTodos: state.todos
//    }
// }
// export default connect(select)(App)
 

//css animation code

// import React from 'react';

// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

// class App extends React.Component {
//    render() {
//       return ( 
//          <div>
//             <ReactCSSTransitionGroup transitionName = "example"
//                transitionAppear = {true} transitionAppearTimeout = {500}
//                transitionEnter = {false} transitionLeave = {false}>
					
//                <h1>My Element...</h1>
//             </ReactCSSTransitionGroup>
//          </div>      
//       );
//    }
// }
// export default App;

// Enter and Leave Animations

// import React from 'react';
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

// class App extends React.Component {
//    constructor(props) {
//       super(props);
		
//       this.state = {
//          items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...']
//       }
//       this.handleAdd = this.handleAdd.bind(this);
//    };
//    handleAdd() {
//       var newItems = this.state.items.concat([prompt('Create New Item')]);
//       this.setState({items: newItems});
//    }
//    handleRemove(i) {
//       var newItems = this.state.items.slice();
//       newItems.splice(i, 1);
//       this.setState({items: newItems});
//    }
//    render() {
//       var items = this.state.items.map(function(item, i) {
//          return (
//             <div key = {item} onClick = {this.handleRemove.bind(this, i)}>
//                {item}
//             </div>
//          );
//       }.bind(this));
      
//       return (
//          <div>      
//             <button onClick = {this.handleAdd}>Add Item</button>
				
//             <ReactCSSTransitionGroup transitionName = "example" 
//                transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
//                {items}
//             </ReactCSSTransitionGroup>
//          </div>
//       );
//    }
// }
// export default App;


//Component life cycle
// import React from 'react';

// class ContraMusicPlayer extends React.Component
// {
// constructor(props) {
//   super(props);
//   this.state = {
//     volume: 70,
//     status: 'pause'
//   }
// }
// // ContraMusicPlayer.defaultProps = {
// //   theme: 'dark'
// // };

// render(){
//     return(
//         <ContraMusicPlayer/>
//     )
// }
// }


import React, { Component } from "react";
class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
      ]
    };
  }
  render() {
    const { articles } = this.state;
    return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
  }
}
export default ExampleComponent;