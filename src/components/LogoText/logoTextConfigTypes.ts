export const LogoTextConfigs = {
    sm: {
        font: 'text-lg',
        icon: 32,
    },
    md: {
        font: 'text-xl',
        icon: 36,
    },
    lg: {
        font: 'text-2xl',
        icon: 42,
    },
    xs: {
        font: 'text-sm',
        icon: 20,
    },
    '2xs': {
        font: 'text-xs',
        icon: 14,
    },
};

export type LogoSizeType = keyof typeof LogoTextConfigs;
