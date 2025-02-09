import ControlButton from "@/components/common/ControlButton";
import ControlSheetForDesktop from "@/components/common/ControlSheetForDesktop";

export default function DongsLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}

            <ControlButton/>
            <ControlSheetForDesktop/>
        </>
    );
}
