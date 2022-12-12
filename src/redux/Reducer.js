import { POST_FORM } from './Action.js';

const initialState = {
    Users: []    
  };

  export default function rootReducer(state = initialState, action) {
    switch (action.type) {     
      case POST_FORM:
        return {
          ...state,
        };            
      default:
        return state;
    }
  };