import { combineReducers } from '@reduxjs/toolkit';

import { SearchReducers } from '@/redux/slices/Search';

const rootReducers = combineReducers({
	search: SearchReducers,
});

export default rootReducers;
