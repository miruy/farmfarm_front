'use client';

import {FaBars, FaChevronLeft, FaTimes} from "react-icons/fa";
import {
    Sheet, SheetClose,
    SheetContent, SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {usePathname, useRouter} from "next/navigation";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/auth/AuthContext";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";

const TopBar = () => {

    const pathname = usePathname();
    const isDongsRoute = pathname === "/";
    const [canGoBack, setCanGoBack] = useState(false);
    const {logout} = useContext(AuthContext);
    const router = useRouter();

    const handleBack = () => {
        if (canGoBack) {
            window.history.back();
        }
    }

    const handleLogout = () => {
        logout();
        router.push("/");
    }

    useEffect(() => {
        setCanGoBack(window.history.length > 1);
    }, []);

    if (!isDongsRoute) {
        return (
            <div className="flex justify-between items-center p-4 w-full mx-auto">
                <div onClick={handleBack} className="hover:bg-secondary rounded-md p-3 cursor-pointer">
                    <FaChevronLeft className="w-5 h-5"/>
                </div>

                <Sheet>
                    <SheetTrigger asChild>
                        <div className="hover:bg-secondary rounded-md p-3 cursor-pointer">
                            <FaBars className="w-5 h-5"/>
                        </div>
                    </SheetTrigger>
                    <VisuallyHidden><SheetTitle></SheetTitle></VisuallyHidden>
                    <SheetContent className="p-4">
                        <div className="flex justify-end">
                            <SheetClose className="rounded-md p-3 hover:bg-secondary cursor-pointer">
                                <FaTimes className="w-5 h-5"/>
                            </SheetClose>
                        </div>

                        <div className="flex flex-col flex-1 py-5">
                            <div
                                onClick={handleLogout}
                                className="flex flex-1 cursor-pointer font-semibold hover:bg-secondary rounded-md py-2 px-5">로그아웃
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        )
    }
}

export default TopBar;