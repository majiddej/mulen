import type { Metadata } from "next";
import "./global.css";
import { Providers } from "../components/global/provider";
import ToastProvider from "@/hooks/ToastContainer";

export const metadata: Metadata = {
    title: "سنـم | سامانه نظارت مکانیزه صندوق های سرمایه گذاری",
    description: "سامانه نظارت مکانیزه صندوق های سرمایه گذاری",
};

export default function RootLayout({
    children,
    params: { session },
}: Readonly<{
    children: React.ReactNode;
    params: any;
}>) {
    return (
        <html lang='fa'>
            <body
                dir='rtl'
                className='font-IranSans w-screen h-dvh bg-[#d8e2ed]'
            >
                <Providers session={session}>
                    <ToastProvider>{children} </ToastProvider>
                </Providers>
            </body>
        </html>
    );
}
