import { XPLevelDataType } from '@/types/datatypes/xp.types';

export const getLevelText = (level: XPLevelDataType) => {
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
