'use client';

import React, {useState, useEffect} from "react";
import {AxiosRequestConfig} from "axios";
import {isAccessTokenExpired} from "@/utils/isAeccessTokenExpired";
import {FARMFARM_AXIOS_INSTANCE} from "@/axios/axios_instance";

// 로그인 상태를 저장할 컨텍스트
interface AuthContextType {
    accessToken: string | null;
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    // 페이지 새로 고침 시 로그인 상태 유지
    useEffect(() => {
        const savedToken = localStorage.getItem("accessToken");

        if (savedToken) {
            setIsLoggedIn(true);
            setAccessToken(savedToken);
        }

        const interceptorFunction = async (config: AxiosRequestConfig) => {
            const getAuthorizationHeader = async () => {
                if (!savedToken) {
                    return {};
                }

                const isTokenExpired = isAccessTokenExpired(savedToken, 10);
                if (isTokenExpired) { // 엑세스 토큰이 만료됬다면
                    // 로그아웃처리
                    logout();
                }

                return {
                    Authorization: `Bearer ${savedToken}`,
                };
            };

            const authorizationHeader = await getAuthorizationHeader();

            return {
                ...config,
                headers: {
                    ...config.headers,
                    ...authorizationHeader,
                },
            };
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const farmfarm_axios_instance_intercepter = FARMFARM_AXIOS_INSTANCE.interceptors.request.use(interceptorFunction);

        return () => {
            FARMFARM_AXIOS_INSTANCE.interceptors.request.eject(farmfarm_axios_instance_intercepter);
        };


    }, [accessToken, isLoggedIn]);

    const login = (token: string) => {
        setIsLoggedIn(true);
        localStorage.setItem("accessToken", token);
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("accessToken");
    };

    return (
        <AuthContext.Provider value={{accessToken, isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthContext = React.createContext<AuthContextType>({
    accessToken: "",
    isLoggedIn: false,
    login: () => {
    },
    logout: () => {
    },
});
