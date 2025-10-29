import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { Navbar, Sidebar } from 'widgets';
import i18next from 'i18next';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
