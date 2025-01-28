import { twMerge } from 'tailwind-merge';

type CircleSizeType = 'xs' | 'sm' | 'md' | 'lg';

interface Props {
    className?: string;
    title?: string;
    points: number;
    size?: CircleSizeType;
    borderColortwClass?: string;
    textColortwClass?: string;
    labelLocation?: 'inside' | 'bottom';
}

const circleSizeConfigstwClass = {
    xs: {
        size: 'h-14 w-14',
        textSize: 'text-md',
        labelSize: 'text-[0.60rem]',
        border: 'border-4',
    },
    sm: {
        size: 'h-24 w-24',
        textSize: 'text-4xl',
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

const Circle: React.FC<Props> = ({
    className,
    title,
    points,
    size = 'md',
    borderColortwClass,
    textColortwClass,
    labelLocation = 'inside',
}) => {
    const { size: circleSize, textSize, labelSize, border } = circleSizeConfigstwClass[size];

    return (
        <div className={twMerge('flex w-full flex-col items-center gap-1', className)}>
            <div
                className={twMerge(
                    'flex-center flex-col rounded-full border-white',
                    border,
                    borderColortwClass,
                    circleSize
                )}
            >
                <p className={twMerge('font-semibold', textColortwClass, textSize)}>{points}</p>
                {title && labelLocation === 'inside' && (
                    <p
                        className={twMerge(
                            'w-16 text-center font-medium leading-tight text-gray-300',
                            labelSize
                        )}
                    >
                        {title}
                    </p>
                )}
            </div>
            {title && labelLocation === 'bottom' && (
                <p
                    className={twMerge(
                        'w-16 text-center font-bold leading-tight text-gray-300',
                        labelSize
                    )}
                >
                    {title}
                </p>
            )}
        </div>
    );
};

export default Circle;
