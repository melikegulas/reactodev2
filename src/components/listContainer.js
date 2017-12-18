import React, { Component } from "react";
import I from "immutable";

export const listAPI = {
handleClick: function(e) {
   console.log(e);
    this.props.dispatch({
      type: "DELETE_TODO_ITEM",      
      data: this.props.currentInput,
      id: e
    })
}
}

class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.todoItems;

    return (
      <div className="list-container">
        {
          items.map((each, idx) => {
            return (
              
              <div key={idx} className="each-todo">
                {each}
                {
                  <button 
                    onClick={listAPI.handleClick.bind(this,idx)}
                    className="delete-icon"
                  >{"X"}
                  </button>
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default ListContainer;
