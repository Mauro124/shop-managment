import React, { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UiState {
    isMenuOpen: boolean;
}


const UI_INITIAL_STATE: UiState = {
    isMenuOpen: false,
}


type Props = {
    children?: React.ReactNode
};

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const toggleSideMenu = () => {
        dispatch({ type: 'TOGGLE_MENU' });
    }


    return (
        <UIContext.Provider value={{
            ...state,

            // Methods
            toggleSideMenu,
        }}>
            {children}
        </UIContext.Provider>
    )
};