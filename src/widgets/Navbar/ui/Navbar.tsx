import React, { useState } from 'react';
import {
    Button, ButtonTheme, classNames, Modal,
} from 'shared';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = () => setIsAuthModal((prev) => !prev);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
                <Modal onClose={onToggleModal} isOpen={isAuthModal}>
                    <input type="text" />
                </Modal>
            </div>
        </div>
    );
};
