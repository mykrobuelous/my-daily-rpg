import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DayType } from '../../data/DayType';
import { IDBrand } from '../../utils/types/BrandType';
import { LevelDataType } from '../../data/XPData';

type AddXPDataType = {
    id: IDBrand;
    experienceID: IDBrand;
    questDetails: {
        quest: string;
        points: number;
        level: LevelDataType;
    };
};

export const dayAPI = createApi({
    reducerPath: 'dayAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/day' }),
    tagTypes: ['Day'],
    endpoints: (builder) => ({
        getDayData: builder.query<DayType[], void>({
            query: () => '/',
            providesTags: ['Day'],
        }),
        addDayData: builder.mutation<DayType, { date: Date }>({
            query: (body) => ({
                url: '/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Day'],
        }),
        deleteDayData: builder.mutation<void, { id: IDBrand }>({
            query: (body) => ({
                url: `/${body.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Day'],
        }),
        addXPData: builder.mutation<void, AddXPDataType>({
            query: (body) => ({
                url: `/xp`,
                method: 'POST',
                body: {
                    dayID: body.id,
                    experienceID: body.experienceID,
                    questDetails: body.questDetails,
                },
            }),
            invalidatesTags: ['Day'],
        }),
        updateXPData: builder.mutation<void, AddXPDataType & { dayID: IDBrand }>({
            query: (body) => ({
                url: `/xp/${body.id}`,
                method: 'PUT',
                body: {
                    dayID: body.dayID,
                    experienceID: body.experienceID,
                    questDetails: body.questDetails,
                },
            }),
            invalidatesTags: ['Day'],
        }),
        deleteXPData: builder.mutation<void, { id: IDBrand; dayID: IDBrand }>({
            query: (body) => ({
                url: `/xp/${body.id}`,
                method: 'DELETE',
                body: {
                    dayID: body.dayID,
                },
            }),
            invalidatesTags: ['Day'],
        }),
    }),
});

export const {
    useGetDayDataQuery,
    useAddDayDataMutation,
    useDeleteDayDataMutation,
    useAddXPDataMutation,
    useDeleteXPDataMutation,
    useUpdateXPDataMutation,
} = dayAPI;
