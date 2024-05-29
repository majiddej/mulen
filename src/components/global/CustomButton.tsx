import { ButtonHTMLAttributes } from "react";

interface CustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: React.ReactNode;
    extraClass?: string;
    block?: boolean;
    primary?: boolean;
}

export default function CustomButton({ ...props }: CustomButton) {
    const { text, extraClass, block, primary, ...rest } = props;

    return (
        <button
            {...rest}
            className={`rounded cursor-pointer py-1 px-4  ${extraClass} ${primary && "bg-primaryy text-white"} 
            ${rest.disabled && "!bg-gray-secondry text-white !cursor-not-allowed"}
            ${block ?? (block && "w-full")}`} 
        >
            {text}
        </button>
    );
}
