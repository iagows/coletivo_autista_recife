import { combineReducers, configureStore } from "@reduxjs/toolkit";
import professionals from "./slices/profissional";
import rules from "./slices/regras";
import settings from "./slices/settings";
import textos from "./slices/textos";

export const store = configureStore({
	reducer: combineReducers({
		settings,
		rules,
		professionals,
		textos,
	}),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
