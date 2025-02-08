'use client';

import React, {ReactNode, Suspense} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AuthProvider} from "@/context/AuthContext";
import {ToastContainer} from "react-toastify";
import {ModalProvider} from "@/context/ModalContext";
import Loading from "@/app/loading";

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
                <ModalProvider>
                    <Suspense fallback={<Loading/>}>
                        {children}
                    </Suspense>
                </ModalProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
};

export default ClientProviders;