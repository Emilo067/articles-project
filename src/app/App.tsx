import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { Navbar, Sidebar } from 'widgets';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
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
}

export default App;
