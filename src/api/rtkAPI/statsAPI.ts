import { IDBrand } from '@/types/brand.types';
import { TotalStatsAPIType, XPPointsType } from '../../types/datatypes/stats.type';
import { generateID } from '../../utils/function/generateID';
import { baseAPI } from './baseAPI';
import { ResponseAPIType } from './api.types';

const BASE_URL = '/stats';

export const defaultTotalStats: TotalStatsAPIType = {
    totalPoints: 0,
    totalTasks: 0,
    totalDays: 0,
    totalExpStats: [],
    dailyStats: [],
};
export const defaultXPPoints: XPPointsType = {
    experienceID: 'ABC00' as IDBrand,
    id: generateID(),
    points: 0,
    tasks: 0,
};

const statsAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        getStatsData: builder.query<TotalStatsAPIType, void>({
            query: () => BASE_URL,
            providesTags: ['Stats'],
            transformResponse: (response: ResponseAPIType<TotalStatsAPIType>) => {
                if (response.success) {
                    return response.data;
                }
                return defaultTotalStats;
            },
        }),
    }),
});

export const { useGetStatsDataQuery } = statsAPI;
