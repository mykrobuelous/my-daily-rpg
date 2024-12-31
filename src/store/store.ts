// store.ts
import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './reducer/MainReducer/mainReducer';
import { dayAPI } from '../api/rtkAPI/dayAPI';
import { experienceAPI } from '../api/rtkAPI/experienceAPI';

const store = configureStore({
    reducer: {
        main: mainReducer,
        [dayAPI.reducerPath]: dayAPI.reducer,
        [experienceAPI.reducerPath]: experienceAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dayAPI.middleware, experienceAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
