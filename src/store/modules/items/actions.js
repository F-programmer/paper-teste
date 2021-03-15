import { RESET_ITEMS, ADD_ITEMS } from "../names";

export const addItems = (item) => ({
	type: ADD_ITEMS,
	payload: item,
});

export const resetItems = (item) => ({
	type: RESET_ITEMS,
});
