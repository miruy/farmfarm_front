'use client';

import {Button} from "@/components/ui/button";
import {FaChevronLeft} from "react-icons/fa";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

const TopBar = () => {

    const pathname = usePathname();
    const isDongsRoute = pathname === "/";
    const [canGoBack, setCanGoBack] = useState(false);

    const handleBack = () => {
        if (canGoBack) {
            window.history.back();
        }
    }

    useEffect(() => {
        setCanGoBack(window.history.length > 1);
    }, []);

    if (!isDongsRoute) {
        return (
            <div className="flex justify-between items-center p-4 w-full lg:w-1/2 2xl:w-1/3 mx-auto px-3">
                <Button
                    variant={null}
                    className="rounded-full p-3 hover:bg-secondary cursor-pointer"
                    onClick={handleBack}
                    disabled={!canGoBack}
                >
                    <FaChevronLeft size={20}/>
                </Button>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Open</Button>
                    </SheetTrigger>
                    <SheetContent className="py-14">
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-1 cursor-pointer  hover:bg-secondary rounded-md py-2 px-5">로그아웃
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        )
    }
}

export default TopBar;