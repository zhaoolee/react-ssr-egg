const defaultState = {
  newsList: []
}


export default (state = defaultState, action)=>{
  switch(action.type){
    case "CHANGELIST":
      return {
        ...state,
        newsList: action.payload
      }
    default:
      return state;
  }
}