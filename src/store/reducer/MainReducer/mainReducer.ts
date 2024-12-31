import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IDBrand } from '../../../utils/types/BrandType';

interface MainRouteState {
    selectedDayIDState: IDBrand | undefined;
}

const initialState: MainRouteState = {
    selectedDayIDState: undefined,
};

const mainReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setSelectedDayIDAction: (state, action: PayloadAction<IDBrand | undefined>) => {
            state.selectedDayIDState = action.payload;
        },
    },
});

export const mainState = (state: RootState) => state.main;

export const { setSelectedDayIDAction } = mainReducer.actions;
export default mainReducer.reducer;
