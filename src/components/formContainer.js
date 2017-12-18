import React, { Component } from "react";
import I from "immutable";

export const formAPI = {
  handleClick: function() {
    /*console.log(this.props.length)*/
      if (this.props.currentInput.trim() !== "") {
        this.props.dispatch({
          type: "ADD_TODO_ITEM",
          //*************************id: 
          data: this.props.currentInput,
          
        })
      }
      this.props.dispatch({
        type: "ADD_CURRENT_INPUT",
        /*id: I.List.length-1,*/
        data: ""
      })
  }
}


class FormContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form-container" onSubmit={e => e.preventDefault()}>
      <div>
        <input
          className="input-field"
          placeholder={"Task Description"}
          value={this.props.currentInput}
          onChange={e => {
            this.props.dispatch({
              type: "ADD_CURRENT_INPUT",
              data: e.target.value
            })
          }}
        />
      </div>
        <div>
          <button
            className="add-task-btn"
            onClick={formAPI.handleClick.bind(this)}
          >
            {"Add Task"}
          </button>
        </div>
      </form>
    );
  }
}

export default FormContainer;
