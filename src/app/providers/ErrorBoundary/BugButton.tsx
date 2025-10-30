import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Button } from 'shared';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow} className={classNames('', {}, [])}>
            {t('throw error')}
        </Button>
    );
};
