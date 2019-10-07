const initState = [];

export default (state = initState, action) => {
  switch(action.type){
    case 'GET_SCORE':
      return action.payload;
    case 'NEW_SCORE':
      return action.payload;
    case 'DELETE_SCORE':
      return action.payload;
    default:
      return state;
  }
}