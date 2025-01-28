import useData from '../../../hooks/useData';
import { IDBrand } from '../../../utils/types/BrandType';
import { useAppDispatch, useAppSelector } from '../../reduxhooks';
import { mainState, setRouteAction, setSelectedDayIDAction } from './mainReducer';
import { OtherRouteType } from './mainReducerConfigs';

const useMainStore = () => {
    const { selectedDayIDState, route } = useAppSelector(mainState);
    const dispatch = useAppDispatch();
    const { dayDataState } = useData();

    const selectedDay = dayDataState.data?.find((dayItem) => dayItem.id === selectedDayIDState);

    const setSelectedDay = (id: IDBrand | null) => {
        dispatch(setSelectedDayIDAction(id || null));
    };

    const setRoute = (route: OtherRouteType) => {
        dispatch(setRouteAction(route));
    };

    return {
        selectedDay: {
            get: selectedDay,
            set: setSelectedDay,
        },
        route: {
            set: setRoute,
            get: route,
        },
    };
};

export default useMainStore;
