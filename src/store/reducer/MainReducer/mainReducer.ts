import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IDBrand } from '../../../utils/types/BrandType';

interface MainRouteState {
    selectedDayIDState: IDBrand | null;
}

const initialState: MainRouteState = {
    selectedDayIDState: null,
};

const mainReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setSelectedDayIDAction: (state, action: PayloadAction<IDBrand | null>) => {
            state.selectedDayIDState = action.payload;
        },
    },
});

export const mainState = (state: RootState) => state.main;

export const { setSelectedDayIDAction } = mainReducer.actions;
export default mainReducer.reducer;
