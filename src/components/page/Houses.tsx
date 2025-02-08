'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableRow
} from "@/components/ui/table";
import {useRouter} from "next/navigation";
import NotFound from "@/app/not-found";
import Loading from "@/app/loading";
import {useHouseApiSearchHouses} from "@/openapi/api/house/house";

const Houses = () => {

    const router = useRouter();

    const {
        data: houses,
        isLoading: isLoading,
        isError: isError,
    } = useHouseApiSearchHouses({page: 0, pageSize: 10}, {
        query: {
            queryKey: ['SearchHouses'],
        },
    });

    const handleHouseDetail = (hosueId: string) => {
        router.push(`/houses/${hosueId}/dongs`)
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
                <div className="text-center text-2xl font-bold pb-5 tracking-wide">하우스</div>

                <Table>
                    <TableBody className="cursor-default">
                        {houses?.data?.map((house, index) => (
                            <TableRow
                                key={index}
                                className="flex justify-center cursor-pointer"
                                onClick={() => handleHouseDetail(house.id!)}>
                                <TableCell className="font-medium">{house.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Houses;