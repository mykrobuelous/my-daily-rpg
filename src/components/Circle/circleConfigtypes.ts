export const circleSizeConfigstwClass = {
    xs: {
        size: 'h-14 w-14',
        textSize: 'text-md',
        labelSize: 'text-[0.60rem]',
        border: 'border-4',
    },
    sm: {
        size: 'h-20 w-20',
        textSize: 'text-2xl',
        labelSize: 'text-[0.65rem]',
        border: 'border-4',
    },
    md: {
        size: 'h-28 w-28',
        textSize: 'text-4xl',
        labelSize: 'text-[0.70rem]',
        border: 'border-4',
    },
    lg: {
        size: 'h-32 w-32',
        textSize: 'text-5xl',
        labelSize: 'text-[0.80rem]',
        border: 'border-4',
    },
};

export type CircleSizeType = keyof typeof circleSizeConfigstwClass;
