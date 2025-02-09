'use client';

import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";
import {useDongApiGetAllDongDevices} from "@/openapi/api/dong/dong";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";

const Dong = ({dongId}: { dongId: string }) => {

    const {
        data: devices,
        isLoading: isLoading,
        isError: isError,
    } = useDongApiGetAllDongDevices(dongId, {
        query: {
            queryKey: ['SearchDevices'],
        },
    });

    const sensors = devices?.filter(device => device.device?.type === "DT002");
    const cctvs = devices?.filter(device => device.device?.type === "DT003");

    if (isLoading) {
        return <Loading/>
    }

    if (isError) {
        return <NotFound/>
    }

    return (
        <div className="flex flex-1 lg:w-[70%] flex-col px-4">
            <div className="flex flex-col w-full mx-auto py-5">
                <div className="text-center text-3xl font-bold pb-5 tracking-wide">센서</div>

                <Table>
                    <TableBody className="cursor-default">
                        {sensors?.map((sensor, index) => (
                            <TableRow key={index} className="flex justify-center items-center hover:bg-transparent">
                                <TableCell className="flex items-center space-x-0.5 font-medium">
                                    <div className="text-lg">{sensor.device?.name}</div>
                                    {/*<TbTemperatureCelsius size={18}/>*/}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="flex flex-col w-full mx-auto pt-10 pb-5">
                <div className="text-center text-3xl font-bold tracking-wide">CCTV</div>

                {cctvs?.map((cctv, index) => {

                    const deviceFunction = cctv?.device?.functions
                        ?.find(f => f.protocol === "CP003" && f.type === "DU001");

                    const deviceConfig = deviceFunction
                        ?.configs
                        ?.find(c => c.key === "DK001");

                    return (
                        <div key={index} className="flex flex-col py-5 space-y-2">
                            <div className="text-xl font-semibold">{cctv?.device?.name}</div>
                            <video
                                key={deviceConfig?.value}
                                src={deviceConfig?.value || ""}
                                className="w-full object-fill rounded-md"
                                playsInline
                                controls
                                muted
                                loop
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Dong;