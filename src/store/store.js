import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middlerWares = [logger];

const composedEnhancer = compose(applyMiddleware(...middlerWares));

export const store = createStore(rootReducer, undefined, composedEnhancer);
