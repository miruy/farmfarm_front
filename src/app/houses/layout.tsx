import TopBar from "@/components/common/TopBar";

export default function DongsLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <TopBar/>
            {children}
        </>
    );
}
