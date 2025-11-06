import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from 'features';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state: LoginSchema, payload: PayloadAction<string>) => {
            state.username = payload.payload;
        },
        setPassword: (state: LoginSchema, payload: PayloadAction<string>) => {
            state.password = payload.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loginByUsername.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: loginReducer, actions: loginActions } = loginSlice;
