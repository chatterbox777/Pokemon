const initialState = {
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_ROOT_REDUCER":
      return { ...state, count: state.count + 1 };
      break;

    default:
      return state;
      break;
  }
};

export default rootReducer;
