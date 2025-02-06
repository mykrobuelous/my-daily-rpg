import { twMerge } from 'tailwind-merge';
import { CalendarDays, Cog, Gamepad2, Home, ListCheck } from 'lucide-react';
import NavDateList from './NavDateList';
import { useModalContext } from '@/context/ModalProvider/useModalContext';
import useMainStore from '@/store/reducer/MainReducer/useMainStore';
import LogoText from '@/components/LogoText/LogoText';
import Button from '@/components/Button/Button';
import { ROUTE } from '@/store/reducer/MainReducer/mainReducerConfigs';

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
            <LogoText
                text="Daily RPG"
                Logo={Gamepad2}
                size={'lg'}
                onClick={() => {
                    route.set(ROUTE.MENU_ROUTE);
                }}
                className="flex-center"
            />

            <LogoText
                text="Home"
                Logo={Home}
                size={'sm'}
                className="rounded-lg bg-white py-2 pl-4 text-black hover:bg-gray-200"
                onClick={() => {
                    route.set(ROUTE.MENU_ROUTE);
                }}
            />
            <LogoText
                text="Quest Templates"
                Logo={ListCheck}
                size={'xs'}
                className="rounded-md bg-white py-1 pl-4 text-black hover:bg-gray-200"
                onClick={() => {
                    route.set(ROUTE.QUEST_ROUTE);
                }}
            />

            <NavDateList className="mt-1 h-full overflow-y-scroll" />
            <Button
                text="Test"
                Icon={Cog}
                onClick={() => {
                    route.set(ROUTE.TEST_ROUTE);
                }}
                variant="yellow"
                className="justify-start rounded-md p-2 pl-4"
            />
            <Button text="New Day" Icon={CalendarDays} onClick={newDateModal.openModal} />
        </div>
    );
};

export default NavBar;
