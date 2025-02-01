'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

const Dongs = () => {

    const dongs = [
        {name: "1동"},
        {name: "2동"},
        {name: "3동"},
        {name: "4동"},
        {name: "5동"},
    ];

    return (
        <div className="flex flex-1 pt-28">
            <div className="w-full lg:w-1/2 2xl:w-1/3 mx-auto px-3">
                <Table>
                    <TableHeader className="cursor-default">
                        <TableRow className="flex justify-center hover:bg-white">
                            <TableHead className="flex items-center">동 이름</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {dongs.map((dong, index) => (
                            <TableRow key={index} className="flex justify-center cursor-pointer">
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