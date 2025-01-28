import { twMerge } from 'tailwind-merge';
import LogoText from '../../components/LogoText/LogoText';
import { CalendarDays, ChartBarBig, Cog, Home } from 'lucide-react';
import Button from '../../components/Button/Button';
import NavDateList from './NavDateList';
import { useModalContext } from '../../context/ModalProvider/useModalContext';
import useMainStore from '../../store/reducer/MainReducer/useMainStore';

interface Props {
    className?: string;
}

const NavBar: React.FC<Props> = ({ className }) => {
    const { newDateModal } = useModalContext();
    const { route } = useMainStore();
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
                    route.set('MENU_ROUTE');
                }}
            />
            <Button
                text="Test"
                Icon={Cog}
                onClick={() => {
                    route.set('TEST_ROUTE');
                }}
                variant="yellow"
                className="justify-start rounded-md p-2 pl-4"
            />
            <NavDateList className="mt-1 h-full overflow-y-scroll" />

            <Button text="New Day" Icon={CalendarDays} onClick={newDateModal.openModal} />
        </div>
    );
};

export default NavBar;
