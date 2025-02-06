// store.ts
import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './reducer/MainReducer/mainReducer';
import { baseAPI } from '@/api/rtkAPI/baseAPI';

const store = configureStore({
    reducer: {
        main: mainReducer,
        [baseAPI.reducerPath]: baseAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
