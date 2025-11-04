import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
