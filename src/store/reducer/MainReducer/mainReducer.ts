import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OtherRouteType, ROUTE, RouteType } from './mainReducerConfigs';
import { IDBrand } from '@/types/brand.types';
import { RootState } from '@/store/store';

interface MainRouteState {
    selectedDayIDState: IDBrand | null;
    route: RouteType | null;
}

const initialState: MainRouteState = {
    selectedDayIDState: null,
    route: null,
};

const mainReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setSelectedDayIDAction: (state, action: PayloadAction<IDBrand | null>) => {
            state.route = ROUTE.DAY_ROUTE;
            state.selectedDayIDState = action.payload;
        },
        setRouteAction: (state, action: PayloadAction<OtherRouteType>) => {
            state.selectedDayIDState = null;
            state.route = action.payload;
        },
    },
});

export const mainState = (state: RootState) => state.main;

export const { setSelectedDayIDAction, setRouteAction } = mainReducer.actions;
export default mainReducer.reducer;
