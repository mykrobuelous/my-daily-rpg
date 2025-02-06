import { baseAPI } from './baseAPI';
import { ResponseAPIType } from './api.types';
import { ExperienceType } from '@/types/datatypes/experience.types';

const BASE_URL = '/experience';

const experienceAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        getExperienceData: builder.query<ExperienceType[], void>({
            query: () => BASE_URL,
            providesTags: ['Experience'],
            transformResponse: (response: ResponseAPIType<ExperienceType[]>) => {
                if (response.success) {
                    return response.data;
                }
                return [];
            },
        }),
    }),
});

export const { useGetExperienceDataQuery } = experienceAPI;
