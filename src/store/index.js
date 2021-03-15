import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducers from "./modules/rootReduer";
import persistReducer from "./persistConfig";

const store = createStore(persistReducer(rootReducers), applyMiddleware(thunk));

const persistor = persistStore(store);

export { persistor, store };
