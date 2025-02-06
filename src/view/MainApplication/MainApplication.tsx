import { ROUTE, RouteType } from '@/store/reducer/MainReducer/mainReducerConfigs';
import useMainStore from '@/store/reducer/MainReducer/useMainStore';
import TopNav from '../TopNav/TopNav';
import DailyRPGView from '../DailyRPGView/DailyRPGView';
import MenuStatsView from '../MenuStatsView/MenuStatsView';
import TestView from '../TestView/TestView';
import NavBar from '../NavBar/NavBar';
import QuestTemplateView from '../QuestTemplateView/QuestTemplateView';

const MainApplication = () => {
    const { route } = useMainStore();

    const renderApp = (renderRoute: RouteType | null) => {
        switch (renderRoute) {
            case ROUTE.DAY_ROUTE:
                return (
                    <>
                        <TopNav className="bg-gray-900" />
                        <DailyRPGView className="flex-grow" />
                    </>
                );
            case ROUTE.MENU_ROUTE:
                return <MenuStatsView className="view-full" />;
            case ROUTE.QUEST_ROUTE:
                return <QuestTemplateView />;
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
