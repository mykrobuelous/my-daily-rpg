import { twMerge } from 'tailwind-merge';
import { fixNumber } from '../../utils/function/fixNumber';
import { circleSizeConfigstwClass, CircleSizeType } from './circleConfigtypes';

interface Props {
    className?: string;
    title?: string;
    points: number;
    size?: CircleSizeType;
    bordertwClass?: string;
    texttwClass?: string;
    labeltwClass?: string;
    labelLocation?: 'inside' | 'bottom';
}

const Circle: React.FC<Props> = ({
    className,
    title,
    points,
    size = 'md',
    bordertwClass,
    texttwClass,
    labeltwClass,
    labelLocation = 'inside',
}) => {
    const { size: circleSize, textSize, labelSize, border } = circleSizeConfigstwClass[size];

    return (
        <div className={twMerge('flex w-full flex-col items-center gap-1', className)}>
            <div
                className={twMerge(
                    'flex-center flex-col rounded-full border-white',
                    border,
                    bordertwClass,
                    circleSize
                )}
            >
                <p className={twMerge('font-semibold', texttwClass, textSize)}>
                    {fixNumber(points)}
                </p>
                {title && labelLocation === 'inside' && (
                    <p
                        className={twMerge(
                            'w-16 text-center font-medium leading-tight text-gray-300',
                            labelSize,
                            labeltwClass
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
                        labelSize,
                        labeltwClass
                    )}
                >
                    {title}
                </p>
            )}
        </div>
    );
};

export default Circle;
