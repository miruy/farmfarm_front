"use client";

import { useRouter } from "next/navigation";
import { useEffect, useContext } from "react";
import { AuthContext } from "@/auth/AuthContext";

export default function Main() {

    const router = useRouter();
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/houses");
        } else {
            router.push("/login");
        }
    }, [isLoggedIn, router]);

    return null
}