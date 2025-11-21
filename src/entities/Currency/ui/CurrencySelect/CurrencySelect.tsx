import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
    const {
        className, onChange, value, readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = (value: string) => {
        onChange?.(value as Currency);
    };

    return (
        <Select
            readonly={readonly}
            label={t('Укажите валюту')}
            className={classNames(
                '',
                {},
                [className],
            )}
            value={value}
            options={options}
            onChange={onChangeHandler}
        />
    );
};
