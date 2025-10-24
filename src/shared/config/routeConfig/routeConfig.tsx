import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

enum AppRoutes {
    MAIN = "main",
    ABOUT = "about"
}

export const routerPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about"
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routerPath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: routerPath.about,
        element: <AboutPage/>
    }
}
