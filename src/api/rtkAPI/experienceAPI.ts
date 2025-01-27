import { ExperienceType } from '../../data/ExperienceType';
import { IDBrand } from '../../utils/types/BrandType';
import { ResponseType } from '../../utils/types/typeConfigs';
import { baseAPI } from './baseAPI';

const BASE_URL = '/experience';

const experienceAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        getExperienceData: builder.query<ExperienceType[], void>({
            query: () => BASE_URL,
            providesTags: ['Experience'],
            transformResponse: (response: ResponseType<ExperienceType[]>) => {
                if (response.success) {
                    return response.data;
                }
                return [];
            },
        }),
        refreshExperiencePoint: builder.mutation<{ id: IDBrand; points: number }[], void>({
            query: () => `${BASE_URL}/refresh-points`,
            transformResponse: (response: ResponseType<{ id: IDBrand; points: number }[]>) => {
                if (response.success) {
                    return response.data;
                }
                return [];
            },
        }),
    }),
});

export const { useGetExperienceDataQuery, useRefreshExperiencePointMutation } = experienceAPI;
