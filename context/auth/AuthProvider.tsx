import React, { FC, useReducer, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

import Cookies from 'js-cookie';
import axios from 'axios';

import { AuthContext, authReducer } from './';

import { IUser } from '../../interfaces';

export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;
}


const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined,
}

type Props = {
    children: React.ReactNode,
}

export const AuthProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
    const { data, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            console.log({ user: data?.user });
            dispatch({ type: 'LOGIN', payload: data?.user as IUser })
        }

    }, [status, data])



    // useEffect(() => {
    //     checkToken();
    // }, [])

    const checkToken = async () => {

        if (!Cookies.get('token')) {
            return;
        }

        try {
            // const { data } = await tesloApi.get('/user/validate-token');
            // const { token, user } = data;
            // Cookies.set('token', token);
            // dispatch({ type: 'LOGIN', payload: user });
        } catch (error) {
            Cookies.remove('token');
        }
    }



    const loginUser = async (email: string, password: string): Promise<boolean> => {

        try {
            // const { data } = await tesloApi.post('/user/login', { email, password });
            // const { token, user } = data;
            // Cookies.set('token', token);
            // dispatch({ type: 'LOGIN', payload: user });
            return true;
        } catch (error) {
            return false;
        }

    }


    const registerUser = async (name: string, email: string, password: string): Promise<{ hasError: boolean; message?: string }> => {
        try {
            // const { data } = await tesloApi.post('/user/register', { name, email, password });
            // const { token, user } = data;
            // Cookies.set('token', token);
            // dispatch({ type: 'LOGIN', payload: user });
            return {
                hasError: false
            }

        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: "Error registering user"
                }
            }

            return {
                hasError: true,
                message: 'No se pudo crear el usuario - intente de nuevo'
            }
        }
    }


    const logout = () => {
        Cookies.remove('firstName');
        Cookies.remove('lastName');

        signOut();
        // router.reload();
        // Cookies.remove('token');
    }



    return (
        <AuthContext.Provider value={{
            ...state,

            // Methods
            loginUser,
            registerUser,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
};