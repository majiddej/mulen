import Image from "next/image";
import headingDivider from "@/public/assets/images/icons/headingDivider.svg";

export default function CustomBox(props: {
    boxHeading: string;
    children: React.ReactNode;
    button?: React.ReactNode;
    needExtraElement?: React.ReactNode;
}) {
    return (
        <div className='bg-white shadow-customBox p-4 rounded flex flex-col gap-y-3'>
            {props?.needExtraElement}
            <div className='flex items-center'>
                <Image src={headingDivider} alt='headingDivider' />
                <h3 className='text-base font-medium text-primaryy ms-2'>
                    {props.boxHeading}
                </h3>
            </div>
            {props?.button && props.button}
            {props.children}
        </div>
    );
}
