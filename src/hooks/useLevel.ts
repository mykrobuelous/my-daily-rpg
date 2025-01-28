import { calculateLevel } from '../utils/function/calculateLevel';
import useData from './useData';

export type LevelDetailsType = {
    level: number;
    currentLevelXP: number;
    totalXPforLevel: number;
    nextLevelXP: number;
};

const useLevel = () => {
    const { experienceDataState } = useData();

    const totalPoints = experienceDataState.data?.reduce((acc, expItem) => {
        return acc + expItem.totalPoints;
    }, 0);

    const { level, currentLevelXP, nextLevelXP, totalXPforLevel } = calculateLevel(
        totalPoints || 0
    );

    return {
        totalPoints,
        levelDetails: {
            level,
            currentLevelXP,
            nextLevelXP,
            totalXPforLevel,
        },
        experienceData: experienceDataState.data,
    };
};

export default useLevel;
