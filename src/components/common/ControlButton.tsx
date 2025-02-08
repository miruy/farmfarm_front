'use client';

import {usePathname} from "next/navigation";
import {FaScrewdriverWrench} from "react-icons/fa6";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {useContext} from "react";
import {ModalContext, ModalTypes} from "@/context/ModalContext";

const ControlButton = () => {

    const {openModal} = useContext(ModalContext);
    const pathname = usePathname();
    const isDongsRoute = pathname === "/";

    if (!isDongsRoute) {
        return (
            <div className="flex lg:hidden cursor-pointer">
                <TooltipProvider>
                    <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild
                                        onClick={() => {
                                            openModal({
                                                name: ModalTypes.HOUSE_DONG_CONTROL,
                                                data: {
                                                    houseId: "jj",
                                                    dongId: "jj"
                                                }
                                            });
                                        }}
                        >
                            <div className="fixed right-5 bottom-7 bg-red-500/90 rounded-full p-4 shadow-lg">
                                <FaScrewdriverWrench className="w-6 h-6 fill-white"/>
                            </div>
                        </TooltipTrigger>

                        <TooltipContent side="left" sideOffset={10}>
                            <div className="text-[16px] font-semibold">제어</div>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        )
    }
}

export default ControlButton;