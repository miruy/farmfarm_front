'use client';

import React, {ReactNode, Suspense} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AuthProvider} from "@/auth/AuthContext";
import {ToastContainer} from "react-toastify";

interface ClientProvidersProps {
    children: ReactNode;
}

const ClientProviders = ({children}: ClientProvidersProps) => {

    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                    },
                },
            }),
    )

    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer/>
            <AuthProvider>
                <Suspense>
                    {children}
                </Suspense>
            </AuthProvider>
        </QueryClientProvider>
    );
};

export default ClientProviders;