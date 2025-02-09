'use client';

import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {Bold, Italic, Underline} from "lucide-react";
import {useEffect, useState} from "react";

const
    ControlSheetForDesktop = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="hidden lg:flex flex-1">
            <div
                className={`fixed ${isScrolled ? `top-[10px]` : `top-[72px]`} bottom-[10px] left-[71%] xl:left-[70%] right-4 bg-gray-50 rounded-md p-5 transition-all duration-500 ease-in-out`}>
                <div className="text-center text-2xl font-bold pb-5 tracking-wide">제어</div>

                <ToggleGroup type="single">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold className="h-4 w-4"/>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                        <Italic className="h-4 w-4"/>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                        <Underline className="h-4 w-4"/>
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
        </div>
    )
}

export default ControlSheetForDesktop;