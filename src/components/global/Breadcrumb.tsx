import Image from "next/image";
import homeIcon from "@/public/assets/images/icons/house-door-fill.svg";

interface BreadcrumbProps {
    pages: string[];
}

export default function Breadcrumb(props: BreadcrumbProps) {
    return (
        <div className='flex gap-x-1'>
            <Image src={homeIcon} alt='headSetIcon' key={0} />
            {"/"}
            {props.pages.map((page, index) => (
                <span className='flex items-center gap-x-1' key={index}>
                    <span
                        className={`text-xs text-[#6B7280] ${
                            index !== props.pages.length - 1
                                ? "font-normal"
                                : "font-medium"
                        }`}
                    >
                        {page}
                    </span>
                    {index !== props.pages.length - 1 ? "/" : ""}
                </span>
            ))}
        </div>
    );
}
