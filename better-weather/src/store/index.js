import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import locationReducer from "./reducers/locationReducer";

export const middlewares = [thunk, logger];

export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(
  createStore
);

export const rootReducer = combineReducers({
  location: locationReducer,
});

export default createStoreWithMiddlewares(rootReducer);
