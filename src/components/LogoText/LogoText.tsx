import { HomeIcon, LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { LogoSizeType, LogoTextConfigs } from './logoTextConfigTypes';

interface Props {
    className?: string;
    Logo?: LucideIcon;
    text?: string;
    cursor?: boolean;
    size?: LogoSizeType | { font: string; icon: number };
    onClick?: () => void;
}

const LogoText: React.FC<Props> = ({
    className,
    Logo = HomeIcon,
    text = 'Lorem Ipsum',
    cursor = true,
    size = 'sm',
    onClick,
}) => {
    const logoSize = typeof size === 'string' ? LogoTextConfigs[size] : size;

    return (
        <div
            className={twMerge(
                'flex items-center gap-4 font-semibold',
                cursor ? 'cursor-pointer' : '',
                className
            )}
            onClick={onClick}
        >
            <Logo size={logoSize.icon} />
            <p className={logoSize.font}>{text}</p>
        </div>
    );
};

export default LogoText;
