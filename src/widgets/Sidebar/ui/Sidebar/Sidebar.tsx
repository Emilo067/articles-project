import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import {
    Button, ButtonSize, ButtonTheme, LangSwitcher, ThemeSwitcher,
} from 'shared';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { className } = props;

    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            key={item.path}
            collapsed={isCollapsed}
            item={item}
        />
    )), [isCollapsed]);

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
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={isCollapsed} className={cls.lang} />
            </div>
        </div>
    );
});
