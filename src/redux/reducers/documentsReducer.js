const getDocumentsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_DOCUMENTS':
        return action.payload;
      case 'UNSET_DOCUMENTS':
        return {};
      default:
        return state;
    }
  };
  
  export default getDocumentsReducer;