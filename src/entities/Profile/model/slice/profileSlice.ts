import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types';

const initialState: ProfileSchema = {
    readonly: true,
    error: undefined,
    isLoading: false,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
