import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ExperienceType } from '../../data/ExperienceType';

export const experienceAPI = createApi({
    reducerPath: 'experienceAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/experience' }),
    tagTypes: ['Day'],
    endpoints: (builder) => ({
        getExperienceData: builder.query<ExperienceType[], void>({
            query: () => '/',
        }),
    }),
});

export const { useGetExperienceDataQuery } = experienceAPI;
