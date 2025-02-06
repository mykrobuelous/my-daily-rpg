export const ROUTE = {
    MENU_ROUTE: 'MENU_ROUTE',
    TEST_ROUTE: 'TEST_ROUTE',
    DAY_ROUTE: 'DAY_ROUTE',
    QUEST_ROUTE: 'QUEST_ROUTE',
} as const;

export type RouteType = (typeof ROUTE)[keyof typeof ROUTE];
export type OtherRouteType = Exclude<RouteType, 'DAY_ROUTE'>;
