import { DayType } from '../../data/DayType';
import { LevelDataType } from '../../data/XPData';
import { IDBrand } from '../../utils/types/BrandType';
import { ResponseType } from '../../utils/types/typeConfigs';
import { baseAPI } from './baseAPI';

type AddXPDataType = {
    id: IDBrand;
    experienceID: IDBrand;
    questDetails: {
        quest: string;
        points: number;
        level: LevelDataType;
    };
};

const BASE_URL = '/day';

const dayAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        getDayData: builder.query<DayType[], void>({
            query: () => BASE_URL,
            providesTags: ['Day'],
            transformResponse: (response: ResponseType<DayType[]>) => {
                if (response.success) {
                    return response.data;
                }
                return [];
            },
        }),
        addDayData: builder.mutation<DayType | null, { date: Date }>({
            query: (body) => ({
                url: BASE_URL,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Day'],
            transformResponse: (response: ResponseType<DayType>) => {
                if (response.success) {
                    return response.data;
                }
                return null;
            },
        }),
        deleteDayData: builder.mutation<void, { id: IDBrand }>({
            query: (body) => ({
                url: `${BASE_URL}/${body.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Day', 'Experience'],
        }),
        addXPData: builder.mutation<void, AddXPDataType>({
            query: (body) => ({
                url: `${BASE_URL}/xp`,
                method: 'POST',
                body: {
                    dayID: body.id,
                    experienceID: body.experienceID,
                    questDetails: body.questDetails,
                },
            }),
            invalidatesTags: ['Day', 'Experience'],
        }),
        updateXPData: builder.mutation<void, AddXPDataType & { dayID: IDBrand }>({
            query: (body) => ({
                url: `${BASE_URL}/xp/${body.id}`,
                method: 'PUT',
                body: {
                    dayID: body.dayID,
                    experienceID: body.experienceID,
                    questDetails: body.questDetails,
                },
            }),
            invalidatesTags: ['Day', 'Experience'],
        }),
        deleteXPData: builder.mutation<void, { id: IDBrand; dayID: IDBrand }>({
            query: (body) => ({
                url: `${BASE_URL}/xp/${body.id}`,
                method: 'DELETE',
                body: {
                    dayID: body.dayID,
                },
            }),
            invalidatesTags: ['Day', 'Experience'],
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetDayDataQuery,
    useAddDayDataMutation,
    useDeleteDayDataMutation,
    useAddXPDataMutation,
    useDeleteXPDataMutation,
    useUpdateXPDataMutation,
} = dayAPI;
