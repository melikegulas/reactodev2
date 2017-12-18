import I from "immutable";

function reducer(state = I.Map(), action) {
  switch (action.type) {
    case "ADD_CURRENT_INPUT":
      return state.set("currentInput", action.data);
    case "ADD_TODO_ITEM":
      const currentItems = state.get("todoItems", I.List());

      return state.set("todoItems", currentItems.push(action.data));
    case "DELETE_TODO_ITEM":
      const currentItems1 = state.get("todoItems", I.List());
      return state.set("todoItems", currentItems1.splice(action.id,1));

       
    default:
      return state;
  }
}

export default reducer;