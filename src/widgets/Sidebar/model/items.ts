import React from 'react';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { routerPath } from 'shared';

export interface SidebarItemType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: routerPath.main,
        Icon: MainIcon,
        text: 'Главная',
    },

    {
        path: routerPath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },

    {
        path: routerPath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
    },
];
