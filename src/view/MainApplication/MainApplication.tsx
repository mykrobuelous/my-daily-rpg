import { RouteType } from '../../store/reducer/MainReducer/mainReducerConfigs';
import useMainStore from '../../store/reducer/MainReducer/useMainStore';
import DailyRPGView from '../DailyRPGView/DailyRPGView';
import MenuStatsView from '../MenuStatsView/MenuStatsView';
import NavBar from '../NavBar/NavBar';
import TestView from '../TestView/TestView';
import TopNav from '../TopNav/TopNav';

const MainApplication = () => {
    const { route } = useMainStore();

    const renderApp = (renderRoute: RouteType | null) => {
        switch (renderRoute) {
            case 'DAY_ROUTE':
                return (
                    <>
                        <TopNav className="bg-gray-900" />
                        <DailyRPGView className="flex-grow" />
                    </>
                );
            case 'MENU_ROUTE':
                return <MenuStatsView className="view-full" />;
            default:
                return <TestView className="view-full" />;
        }
    };

    return (
        <div className="view-full flex flex-row">
            <NavBar className="w-64 bg-gray-950" />
            <div className="flex flex-grow flex-col">{renderApp(route.get)}</div>
        </div>
    );
};

export default MainApplication;
