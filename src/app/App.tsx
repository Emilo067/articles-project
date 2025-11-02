import React, { Suspense } from 'react';
import { classNames } from 'shared';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { Navbar, Sidebar } from 'widgets';

const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
