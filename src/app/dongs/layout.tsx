import TopBar from "@/components/common/TopBar";
import ControlButton from "@/components/common/ControlButton";

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
        </>
    );
}
