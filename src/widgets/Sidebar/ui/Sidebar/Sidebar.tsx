import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import {
    AppLink,
    Button, ButtonSize, ButtonTheme, LangSwitcher, routerPath, ThemeSwitcher,
} from 'shared';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { t } = useTranslation();
    const { className } = props;

    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div className={
            classNames(
                cls.Sidebar,
                { [cls.collapsed]: isCollapsed },
                [className],
            )
        }
        >
            <Button
                className={cls.collapseBtn}
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
            >
                {isCollapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink className={cls.item} to={routerPath.main}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная страница')}
                    </span>
                </AppLink>
                <AppLink className={cls.item} to={routerPath.about}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={isCollapsed} className={cls.lang} />
            </div>
        </div>
    );
};
