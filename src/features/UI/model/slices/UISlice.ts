import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from 'features/UI';

const initialState: UISchema = {
    scroll: {},
};

export const UISlice = createSlice({
    name: 'scrollSaveSlice',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: uiActions } = UISlice;
export const { reducer: uiReducer } = UISlice;
