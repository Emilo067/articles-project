import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities';
import { StateSchema } from './StateSchema';

export function createReduxStore() {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
    };
    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
    });
}
