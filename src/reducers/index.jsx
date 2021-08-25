export const UserStateReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, data: action.payload.templates };
    case "UPDATE_USER":
      return { ...state, user: action.payload.templates };
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
