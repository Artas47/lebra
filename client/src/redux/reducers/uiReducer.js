const initialState = {
  loader: {
    actions: [],
    refreshing: [],
  },
};

const uiReducer = (state = initialState, { type, payload }) => {
  const { loader } = state;
  const { actions } = loader;
  switch (type) {
    case "START":
      return {
        ...state,
        loader: {
          ...loader,
          actions: [...actions, payload.action],
        },
      };
    case "STOP":
      return {
        ...state,
        loader: {
          ...loader,
          actions: actions.filter((action) => {
            if (action.name !== payload.action.name) {
              return true;
            } else {
              return false;
            }
          }),
        },
      };
    default:
      return state;
  }
};

export default uiReducer;
