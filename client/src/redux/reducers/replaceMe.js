const initialState = {
  replaceMe: "replace me!",
};

export const replaceMe = (state = initialState, action) => {
  switch (action.type) {
    case "REPLACE_ME":
      return { ...state, replaceMe: action.siema };
    default:
      return { ...state };
  }
};
