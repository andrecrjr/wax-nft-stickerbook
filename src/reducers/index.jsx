export const UserStateReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, data: action.payload, user: "" };
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    case "GET_USER_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const NFTReducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_CONFIG":
      return {
        ...state,
        ...{
          numberPages: action.payload.pagesNumber,
          collectionImage: action.payload.collectionImage,
        },
      };
    default:
      return state;
  }
};
