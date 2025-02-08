import TopBar from "@/components/common/TopBar";
import ControlButton from "@/components/common/ControlButton";
import ControlModal from "@/components/common/ControlModal";

export default function DongsLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <TopBar/>
            {children}
            <ControlButton/>
            <ControlModal/>
        </>
    );
}
