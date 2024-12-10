export const LevelData = ['MIN', 'MID', 'MAX'] as const;
export type LevelDataType = (typeof LevelData)[number];
