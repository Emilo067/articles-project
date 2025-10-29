import React from 'react';
import {AppLink, classNames} from "shared";
import cls from "./Navbar.module.scss"

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink className={cls.mainLink} to={"/"}>Главная</AppLink>
                <AppLink to={"/about"}>О сайте</AppLink>
            </div>
        </div>
    );
};
