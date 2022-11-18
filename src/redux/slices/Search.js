import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	search: '',
};

const SearchSlices = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload;
		},
		resetSearch: () => initialState,
	},
});

export const SearchActions = SearchSlices.actions;
export const SearchReducers = SearchSlices.reducer;
