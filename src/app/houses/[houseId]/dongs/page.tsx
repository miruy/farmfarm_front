import Dongs from "@/components/page/Dongs";

interface HousePageProps {
    params: { houseId: string };
}

export default function Page({params}: HousePageProps) {

    const houseId = params.houseId;

    return (
        <Dongs houseId={houseId}/>
    )
}
