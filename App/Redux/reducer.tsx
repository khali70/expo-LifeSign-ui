const initialState = {
  count: 0,
};

const UiReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "CounterAdd":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default UiReducer;
