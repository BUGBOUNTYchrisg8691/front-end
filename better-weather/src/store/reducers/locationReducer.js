import {
  GET_LOCATION_START,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_PROMPT,
  GET_LOCATION_ERROR,
  GET_LOCATION_FAILURE,
} from "../../constants/index";

const initialState = {
  location: { latitude: "", longitude: "" },
  error: "",
  isGetting: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATION_START:
      return {
        ...state,
        isGetting: true,
      };
    case GET_LOCATION_SUCCESS:
      console.log(action);
      return {
        ...state,
        isGetting: false,
        location: action.payload,
      };
    case GET_LOCATION_PROMPT:
      console.log(action);
      return {
        ...state,
        isGetting: false,
        location: action.payload,
      };
    case GET_LOCATION_ERROR:
      return {
        ...state,
        isGetting: false,
        error: action.payload,
      };
    case GET_LOCATION_FAILURE:
      console.log(action);
      return {
        ...state,
        isGetting: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
