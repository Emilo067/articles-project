import React, { useState } from 'react';
import {
    Button, ButtonTheme, classNames, Modal,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = () => setIsAuthModal(false);
    const onShowModal = () => setIsAuthModal(true);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>
                <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
            </div>
        </div>
    );
};
