import { classNames } from 'shared/lib/classNames/classNames';
import { Loader, Modal } from 'shared';
import { Suspense } from 'react';
import cls from './LoginModal.module.scss';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    onClose: () => void,
    isOpen: boolean
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            lazy
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginForm onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
