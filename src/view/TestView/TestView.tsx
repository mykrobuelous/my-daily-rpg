import { twMerge } from 'tailwind-merge';
import useData from '../../hooks/useData';

interface Props {
    className?: string;
}

const TestView: React.FC<Props> = ({ className }) => {
    const { experienceDataState } = useData();

    return (
        <div className={twMerge('flex-center flex-wrap items-center gap-2 rounded-md', className)}>
            {experienceDataState.data?.map((expItem) => {
                return (
                    <div
                        className={twMerge(
                            'm-2 flex w-56 flex-col items-center rounded-md border-4',
                            expItem.color.border
                        )}
                        key={expItem.id}
                    >
                        <p
                            className={twMerge(
                                'w-full border-b border-white py-2 text-center text-xl font-bold',
                                expItem.color.text
                            )}
                        >
                            {expItem.experience}
                        </p>
                        <div className="border-b border-white p-4">
                            <p>{expItem.guideQuestion}</p>
                        </div>
                        <p className="text-2xl font-bold">{expItem.totalPoints}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default TestView;
