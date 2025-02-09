'use client';

import {usePathname} from "next/navigation";
import {FaScrewdriverWrench} from "react-icons/fa6";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import ControlSheetForMobile from "@/components/common/ControlSheetForMobile";
import {useState} from "react";

const ControlButton = () => {

    const pathname = usePathname();
    const isDongsRoute = pathname === "/";
    const [cilckControlButton, setCilckControlButton] = useState<boolean>(false);

    if (!isDongsRoute) {
        return (
            <>
                <div className="flex lg:hidden cursor-pointer">
                    <TooltipProvider>
                        <Tooltip delayDuration={100}>
                            <TooltipTrigger asChild
                                            onClick={() => setCilckControlButton(prev => !prev)}
                            >
                                <div className="fixed right-5 bottom-5 z-[1000] bg-red-500/90 rounded-full p-4 shadow-lg">
                                    <FaScrewdriverWrench className="w-6 h-6 fill-white"/>
                                </div>
                            </TooltipTrigger>

                            <TooltipContent side="left" sideOffset={10}>
                                <div className="text-[16px] font-semibold">제어</div>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <ControlSheetForMobile cilckControlButton={cilckControlButton}/>
            </>
        )
    }
}

export default ControlButton;