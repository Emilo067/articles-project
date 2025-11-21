import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    onChangeFirstName?: (value: string) => void,
    onChangeLastName?: (value: string) => void,
    onChangeAge?: (value: string) => void,
    onChangeCity?: (value: string) => void,
    onChangeUsername?: (value: string) => void,
    onChangeAvatar?: (value: string) => void,
    onChangeCurrency?: (value: Currency) => void,
    onChangeCountry?: (value: Country) => void,
    isLoading?: boolean;
    readonly?: boolean
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        onChangeCity,
        error,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.isEditing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar src={data.avatar} />
                </div>
            )}
            <div className={cls.data}>
                <Input
                    onChange={onChangeFirstName}
                    readonly={readonly}
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    readonly={readonly}
                    onChange={onChangeLastName}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
                <Input
                    readonly={readonly}
                    onChange={onChangeCity}
                    value={data?.city}
                    placeholder={t('Ваша город')}
                    className={cls.input}
                />
                <Input
                    readonly={readonly}
                    onChange={onChangeAge}
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                />
                <Input
                    readonly={readonly}
                    onChange={onChangeUsername}
                    value={data?.username}
                    placeholder={t('Ваш ваш никнейм')}
                    className={cls.input}
                />
                <Input
                    readonly={readonly}
                    onChange={onChangeAvatar}
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                />
                <CurrencySelect
                    readonly={readonly}
                    onChange={onChangeCurrency}
                    value={data?.currency}
                    className={cls.input}
                />
                <CountrySelect
                    readonly={readonly}
                    onChange={onChangeCountry}
                    value={data?.country}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
