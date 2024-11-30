import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; /* Defaults to localStorage */

const LOCAL_STORAGE_KEY = "redux-persist-localstorage-key";


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const reduxPersistConfig = {
  key: LOCAL_STORAGE_KEY,
  version: 1,
  storage,
  blacklist: [
    /* API reducers to prevent hard caching. */
  ],
};

const persistedReducer = persistReducer(reduxPersistConfig, rootReducer);

// Typ stanu aplikacji, bazujący na głównym reducerze
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// Typy dla Dispatch i GetState
export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;