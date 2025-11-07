import { AppLink, AppLinkTheme, classNames } from 'shared';
import React, { memo } from 'react';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
    item?: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {item.text}
            </span>
        </AppLink>
    );
});
