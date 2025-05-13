import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import professionals from "./slices/profissional";
import { regraApi } from "./slices/regras";
import settings from "./slices/settings";
import { textoApi } from "./slices/textos";

const settingsPersistConfig = {
	key: "settings",
	storage,
	// whitelist opcional se quiser selecionar campos específicos
	// whitelist: ['theme', 'language']
};

const rootReducer = combineReducers({
	// Reducers não persistentes
	regraApi: regraApi.reducer,
	textoApi: textoApi.reducer,
	professionals,

	// Reducer persistente
	settings: persistReducer(settingsPersistConfig, settings),
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
			},
		})
			.concat(regraApi.middleware)
			.concat(textoApi.middleware), // Adicionar middleware da API
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
