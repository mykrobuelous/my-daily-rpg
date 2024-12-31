import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DayType } from '../../data/DayType';

export const dayAPI = createApi({
    reducerPath: 'dayAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/day' }),
    tagTypes: ['Day'],
    endpoints: (builder) => ({
        getDayData: builder.query<DayType[], void>({
            query: () => '/',
        }),
    }),
});

export const { useGetDayDataQuery } = dayAPI;
