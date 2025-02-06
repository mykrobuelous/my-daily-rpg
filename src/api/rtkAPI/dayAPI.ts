import { IDBrand } from '@/types/brand.types';
import { baseAPI } from './baseAPI';
import { AddXPDataAPIType, ResponseAPIType } from './api.types';
import { DayType } from '@/types/datatypes/day.types';

const BASE_URL = '/day';

const dayAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        getDayData: builder.query<DayType[], void>({
            query: () => BASE_URL,
            providesTags: ['Day'],
            transformResponse: (response: ResponseAPIType<DayType[]>) => {
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
            invalidatesTags: ['Day', 'Stats'],
            transformResponse: (response: ResponseAPIType<DayType>) => {
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
            invalidatesTags: ['Day', 'Stats'],
        }),
        addXPData: builder.mutation<void, AddXPDataAPIType>({
            query: (body) => ({
                url: `${BASE_URL}/xp`,
                method: 'POST',
                body: {
                    dayID: body.id,
                    experienceID: body.experienceID,
                    questDetails: body.questDetails,
                },
            }),
            invalidatesTags: ['Day', 'Stats'],
        }),
        updateXPData: builder.mutation<void, AddXPDataAPIType & { dayID: IDBrand }>({
            query: (body) => ({
                url: `${BASE_URL}/xp/${body.id}`,
                method: 'PUT',
                body: {
                    dayID: body.dayID,
                    experienceID: body.experienceID,
                    questDetails: body.questDetails,
                },
            }),
            invalidatesTags: ['Day', 'Stats'],
        }),
        deleteXPData: builder.mutation<void, { id: IDBrand; dayID: IDBrand }>({
            query: (body) => ({
                url: `${BASE_URL}/xp/${body.id}`,
                method: 'DELETE',
                body: {
                    dayID: body.dayID,
                },
            }),
            invalidatesTags: ['Day', 'Stats'],
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
