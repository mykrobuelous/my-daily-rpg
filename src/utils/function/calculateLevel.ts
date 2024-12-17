export const calculateLevel = (xp: number): number => {
    if (xp < 0) {
        throw new Error('XP cannot be negative');
    }
    return Math.floor(Math.sqrt(xp / 40));
};
