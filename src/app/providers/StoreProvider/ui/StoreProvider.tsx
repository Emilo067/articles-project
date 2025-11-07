import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children } = props;

    const navigate = useNavigate();
    const store = createReduxStore(
        navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
