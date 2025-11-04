import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};
