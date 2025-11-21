import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string
    size?: number
    alt?: string
}

export const Avatar = ({
    src, className, size, alt,
}: AvatarProps) => {
    const { t } = useTranslation();

    const mods: Mods = {

    };

    const styles = {
        width: size || 100,
        height: size || 100,
    };

    return (
        <img src={src} style={styles} alt={alt} className={classNames(cls.Avatar, mods, [className])} />
    );
};
