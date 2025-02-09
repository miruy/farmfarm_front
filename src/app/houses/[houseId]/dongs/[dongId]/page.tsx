import Dong from "@/components/page/Dong";

interface DongPageProps {
    params: {
        houseId: string;
        dongId: string;
    };
}

export default function DongPage({params}: DongPageProps) {

    const dongId = params.dongId;

    return (
        <Dong dongId={dongId}/>
    );
}
