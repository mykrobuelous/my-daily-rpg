import { twMerge } from 'tailwind-merge';
import LogoText from '../../components/LogoText/LogoText';
import { CalendarDays, ChartBarBig, Home } from 'lucide-react';
import Button from '../../components/Button/Button';
import NavDateList from './NavDateList';
import { useModalContext } from '../../context/ModalProvider/useModalContext';

interface Props {
    className?: string;
}

const NavBar: React.FC<Props> = ({ className }) => {
    const { newDateModal } = useModalContext();
    return (
        <div
            className={twMerge(
                'flex flex-col justify-between gap-4 overflow-hidden p-5',
                className
            )}
        >
            <LogoText text="Daily RPG" Logo={ChartBarBig} size={'lg'} />
            <LogoText
                text="Home"
                Logo={Home}
                size={'sm'}
                className="rounded-lg bg-white py-2 pl-4 text-black hover:bg-gray-200"
                onClick={() => {
                    // route.routeHome;
                }}
            />
            <NavDateList className="mt-1 overflow-y-scroll" />
            <Button text="New Day" Icon={CalendarDays} onClick={newDateModal.openModal} />
        </div>
    );
};

export default NavBar;
