'use client';

import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";
import {TbTemperatureCelsius} from "react-icons/tb";

const Dong = () => {

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

    return (
        <div className="flex flex-1 flex-col pt-28 space-y-5">
            <div className="flex">
                <div className="flex flex-col w-full lg:w-1/2 2xl:w-1/3 mx-auto py-5 px-3">
                    <div className="text-center text-2xl font-bold pb-5 tracking-wide">센서</div>

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
            </div>

            <div className="flex flex-1">
                <div className="flex flex-col w-full lg:w-1/2 2xl:w-1/3 mx-auto py-5 px-3">
                    <div className="text-center text-2xl font-bold tracking-wide">CCTV</div>

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
        </div>
    )
}
export default Dong;