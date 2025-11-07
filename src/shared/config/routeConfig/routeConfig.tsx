import { RouteProps } from 'react-router-dom';
import {
    NotFoundPage, AboutPage, MainPage, ProfilePage,
} from 'pages';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const routerPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routerPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: routerPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: routerPath.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: routerPath.not_found,
        element: <NotFoundPage />,
    },
};
