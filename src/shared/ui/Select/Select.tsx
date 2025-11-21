import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string;
    label?: string
    options?: SelectOption[]
    onChange?: (value: string) => void
    value?: string
    readonly?: boolean
}

export const Select = (props: SelectProps) => {
    const {
        className,
        options,
        label,
        value,
        onChange,
        readonly,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option className={cls.option} key={opt.value} value={opt.value}>{opt.content}</option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            <span className={cls.label}>{`${label}>`}</span>
            <select
                onChange={onChangeHandler}
                value={value}
                className={cls.select}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
};
