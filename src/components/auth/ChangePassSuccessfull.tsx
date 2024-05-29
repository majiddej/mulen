"use client";

import { useRouter } from "next/navigation";
import CustomButton from "../global/CustomButton";
import Image from "next/image";

export default function ChangePassSuccessfull() {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <Image
                src='/assets/images/success-icon.png'
                alt='successIcon'
                width={70}
                height={70}
            />
            کلمه عبور با موفقییت تغییر کرد.
            <CustomButton
                onClick={() => router.push("/login")}
                block
                extraClass='bg-primaryy mt-3 h-10 rounded-[30px]'
                text={<span>بازگشت به صفحه ورود</span>}
            />
        </div>
    );
}
