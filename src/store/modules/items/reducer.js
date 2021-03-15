import produce from "immer";
import { RESET_ITEMS, ADD_ITEMS } from "../names";

const intialState = [];

const reducer = (state = intialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case ADD_ITEMS: {
				const auxDraft = draft;
				auxDraft.push(action.payload);
				draft = auxDraft;
				return draft;
			}

			case RESET_ITEMS: {
				draft = intialState;
				return draft;
			}

			default:
				return state;
		}
	});
};

export default reducer;
