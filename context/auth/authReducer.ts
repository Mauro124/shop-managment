import { AuthState } from './';
import { IUser } from '../../interfaces';


type AuthActionType =
    | { type: 'LOGIN', payload: IUser }
    | { type: 'LOGOUT' }


export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {

    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }

        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                user: undefined,
            }


        default:
            return state;
    }

}