import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
   render() {
      return (
         <div>
            <input type = 'text' ref = {this.myRef}  />
				
            <button onClick = {(e) => this.handleClick(e)}>
               Add
            </button>
         </div>
      )
   }
   handleClick(e) {
   
      const node = this.myRef.current
      const text = node.value.trim()
      this.props.onAddClick(text)
      node.value = ''
     
   }
}