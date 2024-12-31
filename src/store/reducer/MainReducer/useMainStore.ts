import useData from '../../../hooks/useData';
import { IDBrand } from '../../../utils/types/BrandType';
import { useAppDispatch, useAppSelector } from '../../reduxhooks';
import { mainState, setSelectedDayIDAction } from './mainReducer';

const useMainStore = () => {
    const { selectedDayIDState } = useAppSelector(mainState);
    const dispatch = useAppDispatch();
    const { dayDataState } = useData();

    const selectedDay = dayDataState.data?.find((dayItem) => dayItem.id === selectedDayIDState);

    const setSelectedDay = (id: IDBrand | undefined) => {
        dispatch(setSelectedDayIDAction(id));
    };

    return {
        selectedDay: {
            get: selectedDay,
            set: setSelectedDay,
        },
    };
};

export default useMainStore;
