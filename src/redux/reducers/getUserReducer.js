const getUserReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_USER':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.getUser
  export default getUserReducer;