import { combineReducers } from "redux";

const initialState = {
  state: {},
  step: 0,
  country: 'e'
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_COVID_INFO":
      return {
        state: action.newState,
        step: state.step+1,
        country: state.country
      };
    case "NEW_COUNTRY_STATISTICS":
      console.log('ACR', action);
      return {
        state: action.newState,
        step: state.step+1,
        country: action.country
      }
  }

  return state;
}

export default combineReducers({ rootReducer });
