export interface LevelInfoType {
    playerLevel: number;
    playerExpToTotalLevel: number;
    playerExpInCurLevel: number;
    playerExpToNextLevel: number;
    playerPercentageProgress: number;
    playerDaysToNextLevel: number;
}

export const calculateLevel = (totalXP: number, averageXPDaily: number): LevelInfoType => {
    const BASE_XP_REQUIRED = 140;
    const XP_GROWTH_RATE = 1.5;

    if (totalXP < 0) {
        throw new Error('XP cannot be negative');
    }

    // PLAYERS CURRENT LEVEL
    const playerLevel =
        totalXP < BASE_XP_REQUIRED
            ? 1
            : Math.floor(Math.log(totalXP / BASE_XP_REQUIRED) / Math.log(XP_GROWTH_RATE)) + 1;

    const currentLevelXPFloor =
        playerLevel === 1
            ? 0
            : Math.floor(BASE_XP_REQUIRED * Math.pow(XP_GROWTH_RATE, playerLevel - 1));

    const currentLevelXPCeil = Math.floor(BASE_XP_REQUIRED * Math.pow(XP_GROWTH_RATE, playerLevel));

    // PLAYER EXP TO TOTAL TO NEXT LEVEL
    const playerExpToTotalLevel = currentLevelXPCeil - currentLevelXPFloor;

    // PLAYER CURRENT EXP IN CURRENT LEVEL
    const playerExpInCurLevel = totalXP - currentLevelXPFloor;

    // PLAYER EXP NEEDED TO LEVEL UP
    const playerExpToNextLevel = currentLevelXPCeil - totalXP;

    // PLAYER PERCENTAGE PROGRESS FOR CURRENT LEVEL
    const playerPercentageProgress = (playerExpInCurLevel / playerExpToTotalLevel) * 100;

    // PLAYERS NO OF DAYS TO LEVEL UP BASE ON AVERAGE XP DAILY
    const playerDaysToNextLevel =
        playerExpToNextLevel / averageXPDaily > 1
            ? Math.ceil(playerExpToNextLevel / averageXPDaily)
            : 0;

    return {
        playerLevel,
        playerExpToTotalLevel,
        playerExpInCurLevel,
        playerExpToNextLevel,
        playerPercentageProgress,
        playerDaysToNextLevel,
    };
};
