import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Button, LangSwitcher, ThemeSwitcher } from 'shared';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const { className } = props;

    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
