import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    Button, ButtonTheme, DynamicModuleLoader, Input, ReducersList, Text, TextTheme, useAppDispatch,
} from 'shared';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    autoFocus
                    className={cls.input}
                    type="text"
                    onChange={onChangeUsername}
                    value={username}
                    placeholder={t('Введите логин')}
                />
                <Input
                    className={cls.input}
                    type="text"
                    onChange={onChangePassword}
                    value={password}
                    placeholder={t('Введите пароль')}
                />
                <Button
                    onClick={onLoginClick}
                    disabled={isLoading}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
export default LoginForm;
