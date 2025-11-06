import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore() {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
