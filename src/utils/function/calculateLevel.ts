interface LevelInfo {
    level: number;
    nextLevelXP: number;
    currentLevelXP: number;
    totalXPforLevel: number;
}

export const calculateLevel = (xp: number): LevelInfo => {
    if (xp < 0) {
        throw new Error('XP cannot be negative');
    }

    const level = Math.floor(Math.sqrt(xp / 40));
    const nextLevelXP = (level + 1) ** 2 * 40;
    const totalXPforLevel = level ** 2 * 40;
    const currentLevelXP = xp - totalXPforLevel;

    return {
        level,
        nextLevelXP: nextLevelXP - totalXPforLevel,
        currentLevelXP,
        totalXPforLevel,
    };
};
