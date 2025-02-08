'use client';

import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";
import {TbTemperatureCelsius} from "react-icons/tb";
import {useEffect, useState} from "react";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {Bold, Italic, Underline} from "lucide-react";

const Dong = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const sensors = [
        {id: 1, type: "온도", data: 32},
        {id: 2, type: "온도", data: 28},
        {id: 3, type: "온도", data: 28},
        {id: 4, type: "온도", data: 32},
        {id: 5, type: "온도", data: 28},
        {id: 6, type: "온도", data: 28},
    ];

    const cctvs = [
        {id: 1, src: "/video/testVideo.mov"},
        {id: 2, src: "/video/testVideo.mov"},
        {id: 3, src: "/video/testVideo.mov"},
        {id: 4, src: "/video/testVideo.mov"},
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex flex-1 flex-col px-4 lg:flex-row xl:space-x-10 xl:px-[5%]">
            <div className="lg:w-[70%]">
                <div className="flex flex-col w-full mx-auto py-5">
                    <div className="text-center text-3xl font-bold pb-5 tracking-wide">센서</div>

                    <Table>
                        <TableBody className="cursor-default">
                            {sensors.map((sensor, index) => (
                                <TableRow key={index} className="flex justify-center items-center hover:bg-transparent">
                                    <TableCell>{sensor.type}</TableCell>
                                    <TableCell className="flex items-center space-x-0.5 font-medium">
                                        <div className="text-lg">{sensor.data}</div>
                                        <TbTemperatureCelsius size={18}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex flex-col w-full mx-auto pt-10 pb-5">
                    <div className="text-center text-3xl font-bold tracking-wide">CCTV</div>

                    {cctvs.map((cctv, index) => (
                        <div key={index} className="flex flex-col py-5 space-y-2">
                            <div className="text-lg font-semibold">CCTV {cctv.id}</div>
                            <video
                                src={cctv.src}
                                className="w-full object-fill rounded-md"
                                // autoPlay
                                playsInline
                                controls
                                muted
                                loop
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="hidden lg:flex flex-1">
                <div
                    className={`fixed ${isScrolled ? `top-[10px]` : `top-[72px]`} bottom-[10px] left-[71%] xl:left-[70%] right-4 xl:right-[5%] bg-secondary/50 rounded-md p-5 transition-all duration-500 ease-in-out`}>
                    <div className="text-center text-2xl font-bold pb-5 tracking-wide">제어</div>

                    <ToggleGroup type="single">
                        <ToggleGroupItem value="bold" aria-label="Toggle bold">
                            <Bold className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="italic" aria-label="Toggle italic">
                            <Italic className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="underline" aria-label="Toggle underline">
                            <Underline className="h-4 w-4" />
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>
        </div>
    )
}
export default Dong;