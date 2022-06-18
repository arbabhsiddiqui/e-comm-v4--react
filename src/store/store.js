import { compose, createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blackList: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlerWares = [logger];

const composedEnhancer = compose(applyMiddleware(...middlerWares));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store);
