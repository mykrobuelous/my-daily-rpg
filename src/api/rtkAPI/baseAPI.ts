import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseAPI = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Day', 'Experience', 'Stats'],
    endpoints: () => ({}),
});
