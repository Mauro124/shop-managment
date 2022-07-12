import { UiState } from './';


type UiActionType =
    | { type: 'TOGGLE_MENU' }


export const uiReducer = (state: UiState, action: UiActionType): UiState => {

    switch (action.type) {
        case 'TOGGLE_MENU':
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            }

        default:
            return state;
    }

}