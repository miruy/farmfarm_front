'use client';

import {usePathname} from "next/navigation";
import {FaScrewdriverWrench} from "react-icons/fa6";

const ControlButton = () => {

    const pathname = usePathname();
    const isDongsRoute = pathname === "/";

    if (!isDongsRoute) {
        return (
            <div className="flex lg:hidden">
                <div className="fixed right-5 bottom-7 bg-secondary rounded-full p-4 shadow-md">
                    <FaScrewdriverWrench className="w-6 h-6"/>
                </div>
            </div>
        )
    }
}

export default ControlButton;