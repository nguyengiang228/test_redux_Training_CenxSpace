import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { apiCaller } from "./api/api.caller";
import { persistReducer, persistStore } from "redux-persist";
import dashboardReducer from "./feature/dashboard.slice";
import { dashboardPersistConfig } from "./persis.config";

const rtkQueryMiddleware = [apiCaller.middleware];
const rootReducer = combineReducers({
  reducer: persistReducer(dashboardPersistConfig, dashboardReducer),
  apiCaller: apiCaller.reducer,
});

const store = configureStore({
  reducer: rootReducer as Reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(rtkQueryMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store);
export default store;
