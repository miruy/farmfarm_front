'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableRow
} from "@/components/ui/table";
import {useRouter} from "next/navigation";

const Dongs = () => {

    const router = useRouter();

    const dongs = [
        {id: 1, name: "1동"},
        {id: 2, name: "2동"},
        {id: 3, name: "3동"},
        {id: 4, name: "4동"},
        {id: 5, name: "5동"},
    ];

    const handleDongDetail = (dongId: number) => {
        router.push(`/dongs/${dongId}`)
    }

    return (
        <div className="flex flex-1 pt-5">
            <div className="flex flex-col w-full mx-auto py-5 px-4 lg:px-[10%]">
                <div className="text-center text-2xl font-bold pb-5 tracking-wide">하우스 동</div>

                <Table>
                    <TableBody className="cursor-default">
                        {dongs.map((dong, index) => (
                            <TableRow
                                key={index}
                                className="flex justify-center cursor-pointer"
                                onClick={() => handleDongDetail(dong.id)}>
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