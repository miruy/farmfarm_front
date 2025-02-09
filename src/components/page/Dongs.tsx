'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableRow
} from "@/components/ui/table";
import {useRouter} from "next/navigation";
import {useHouseApiGetHouseById} from "@/openapi/api/house/house";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
import {useDongApiSearchDongs} from "@/openapi/api/dong/dong";

const Dongs = ({houseId}: { houseId: string }) => {

    const router = useRouter();

    const {
        data: house
    } = useHouseApiGetHouseById(houseId, {
        query: {
            queryKey: ['SearchHouse'],
        },
    });

    const {
        data: dongs,
        isLoading: isLoading,
        isError: isError,
    } = useDongApiSearchDongs({
        page: 0,
        pageSize: 10,
        houseIds: [houseId]
    }, {
        query: {
            queryKey: ['SearchDongs'],
        },
    });

    const handleDongDetail = (dongId: string) => {
        router.push(`/houses/${houseId}/dongs/${dongId}/`)
    }

    if (isLoading) {
        return <Loading/>
    }

    if (isError) {
        return <NotFound/>
    }

    return (
        <div className="flex flex-1 pt-5">
            <div className="flex flex-col w-full mx-auto py-5 px-4 lg:px-[10%]">
                <div className="text-center text-2xl font-bold pb-5 tracking-wide">{house?.name}</div>

                <Table>
                    <TableBody className="cursor-default">
                        {dongs?.data?.map((dong, index) => (
                            <TableRow
                                key={index}
                                className="flex justify-center cursor-pointer"
                                onClick={() => handleDongDetail(dong.id!)}>
                                <TableCell className="font-medium">{dong.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Dongs;