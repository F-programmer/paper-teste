import storage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";

const Reducer = (reducers) => {
	const persistedReducer = persistReducer(
		{
			key: "app",
			storage,
			whitelist: ["items"],
		},
		reducers
	);
	return persistedReducer;
};

export default Reducer;
