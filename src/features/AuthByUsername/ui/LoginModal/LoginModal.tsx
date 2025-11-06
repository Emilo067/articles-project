import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

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
            <LoginForm />
        </Modal>
    );
};
