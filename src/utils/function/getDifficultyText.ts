import { LevelDataType } from '../../data/XPData';

export const getLevelText = (level: LevelDataType) => {
    switch (level) {
        case 'MIN':
            return 'Minimum';
        case 'MID':
            return 'Medium';
        case 'MAX':
            return 'Maximum';
        default:
            return 'Minimum';
    }
};
