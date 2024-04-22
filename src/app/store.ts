import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../services/pokemon";

export const store = configureStore({
  reducer: {
    // Add the API reducer to the store
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
