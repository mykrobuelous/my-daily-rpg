import { XPPointsType } from '@/types/datatypes/stats.type';
import useData from './useData';
import { ExperienceType } from '@/types/datatypes/experience.types';
import { defaultTotalStats, defaultXPPoints, useGetStatsDataQuery } from '@/api/rtkAPI/statsAPI';
import useMainStore from '@/store/reducer/MainReducer/useMainStore';
import { calculateLevel } from '@/utils/function/calculateLevel';

export type StatsExpDataType = ExperienceType & {
    stats: XPPointsType;
};

const useLevel = () => {
    const statsData = useGetStatsDataQuery();
    const { experienceDataState } = useData();
    const { selectedDay } = useMainStore();

    const { totalPoints, totalTasks, totalDays, totalExpStats } =
        statsData?.data ?? defaultTotalStats;

    const statsExpData: StatsExpDataType[] | undefined = experienceDataState.data?.map(
        (expItem) => {
            const expItemStats = totalExpStats.find(
                (expStatsItem) => expStatsItem.experienceID === expItem.id
            );
            return {
                ...expItem,
                stats: expItemStats ? expItemStats : defaultXPPoints,
            };
        }
    );

    const totalAverages = {
        pointsPerDay: isNaN(totalPoints / totalDays) ? 0 : totalPoints / totalDays,
        taskPerDay: isNaN(totalTasks / totalDays) ? 0 : totalTasks / totalDays,
    };

    const selectedDayStats = statsData.data?.dailyStats.find(
        (dayStatItem) => dayStatItem.dayID === selectedDay.get?.id
    );

    const totalLevelDetails = calculateLevel(totalPoints, totalAverages.pointsPerDay);

    return {
        totalPoints,
        totalTasks,
        totalDays,
        statsExpData,
        totalAverages,
        selectedDayStats,
        overAllLevel: totalLevelDetails,
    };
};

export default useLevel;
