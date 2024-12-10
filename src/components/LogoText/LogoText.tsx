import { HomeIcon, LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    Logo?: LucideIcon;
    text?: string;
    cursor?: boolean;
    size?: LogoSizeType | { font: string; icon: number };
    onClick?: () => void;
}

type LogoSizeType = 'sm' | 'md' | 'lg' | 'xs' | '2xs';

const LogoTextConfigs = {
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
