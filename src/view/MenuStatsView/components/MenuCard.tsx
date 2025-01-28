import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    children?: React.ReactNode;
    title: string;
    box?: boolean;
}

const MenuCard: React.FC<Props> = ({ className, children, title, box = false }) => {
    return (
        <div
            className={twMerge(
                'flex flex-col gap-4',
                'view-full card-glossy rounded-md p-4',
                className
            )}
        >
            <h2 className="text-2xl font-semibold tracking-wide text-gray-100">{title}</h2>
            <div className={twMerge('view-full', box ? 'box' : '')}>{children}</div>
        </div>
    );
};

export default MenuCard;
