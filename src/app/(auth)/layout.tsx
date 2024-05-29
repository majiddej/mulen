import "@/app/global.css";
import Image from "next/image";
import Link from "next/link";
import login from "@/public/assets/images/loginImage.svg";
import infoIcon from "@/public/assets/images/icons/infoCircleIcon.svg";
import headSetIcon from "@/public/assets/images/icons/headsetIcon.svg";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main
            className='w-full min-h-full md:h-full bg-login_bg flex flex-col justify-center
                items-center relative'
        >
            <div
                className='w-full md:w-5/6 max-w-6xl md:h-[85%] bg-gradient-to-b from-secondary to-primaryy
                    z-10 rounded flex flex-col md:flex-row text-primaryy shadow-authLayout'
            >
                <div
                    className='w-full md:w-49% md:h-full bg-white shadow-rightBgLayout rounded-e-xl rounded-s
                        flex flex-col items-center gap-y-8 p-10'
                >
                    <h1 className='text-primaryy text-center text-lg mt-auto'>
                        <b>سنم |</b> سامانه نظارت مکانیزه صندوق های سرمایه گذاری
                    </h1>
                    <div className='border-[0.03125rem] border-primaryy/[.25] rounded-xl w-full py-4 mb-auto'>
                        {children}
                    </div>
                    <p className='text-xs text-center text-Neutral-500'>
                        تمامی حقوق مادی و معنوی این سامانه متعلق به سازمان بورس
                        و اوراق بهادار می باشد.
                        <br />
                        توسعه این سامانه به عهده{" "}
                        <a
                            href='https://rayanbourse.ir/fa/'
                            className='underline'
                        >
                            شرکت رایان بورس
                        </a>{" "}
                        است.
                    </p>
                </div>
                <div className='flex flex-col relative'>
                    <div className='flex flex-row items-center justify-end gap-x-[0.5rem] px-7 pt-7'>
                        <Link
                            href={"/"}
                            className='flex flex-row items-center text-white text-[0.8125rem]/[1.271875rem]
                                gap-x-[0.5rem]'
                        >
                            <span>راهنمای سامانه</span>
                            <Image
                                src={infoIcon}
                                alt='info'
                                width={16}
                                height={16}
                            />
                        </Link>
                        <Link
                            href={"/"}
                            className='flex flex-row items-center text-white text-[0.8125rem]/[1.271875rem]
                                gap-x-[0.5rem]'
                        >
                            <span>021-41721000</span>
                            <Image
                                src={headSetIcon}
                                alt='info'
                                width={16}
                                height={16}
                            />
                        </Link>
                    </div>
                    <div>
                        <Image
                            src={login}
                            alt='login'
                            width={570}
                            height={542}
                            className='pe-[3.5rem] pt-[3.5rem]'
                        />
                        <p
                            className='text-white text-[0.8125rem]/[1.271875rem] px-7 absolute bottom-14 start-3
                                text-justify'
                        >
                            سامانه نظارت مکانیزه صندوق های سرمایه گذاری (سنم) با
                            هدف نظارت مستمر بر صندوق های سرمایه گذاری توسعه
                            یافته است. مطابق با بخشنامه سازمان بورس و اوراق
                            بهادار، کلیه مدیران صندوق های سرمایه گذاری مکلف
                            هستند به صورت روزانه فایل اطلاعات صندوق های سرمایه
                            گذاری (XML) تحت مدیریت خود را که توسط نرم افزار
                            صندوق های سرمایه گذاری تولید می شود را در سامانه سنم
                            بارگذاری نمایند.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
