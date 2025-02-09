'use client';

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
                컨트롤 박스
            </div>
        </div>
    )
}

export default ControlSheetForDesktop;