import React from "react";
import { useField, FieldAttributes } from "formik";

interface CustomInputProps extends FieldAttributes<any> {
    label?: React.ReactNode;
    changeLabelPosition?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
    label,
    changeLabelPosition,
    className,
    ...props
}) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const [field, meta] = useField(props);

    return (
        <div
            className={`flex ${changeLabelPosition ? "flex-row gap-x-3" : "flex-col gap-y-3"}`}
        >
            {label}
            <input
                {...field}
                {...props}
                className={`${className} ${meta.touched && meta.error ? "!border-Error" : ""}
                ${props.disabled && "cursor-not-allowed bg-gray-5"}`}
            />
            {meta.touched && meta.error ? (
                <div className='text-Error'>{meta.error}</div>
            ) : null}
        </div>
    );
};

export default CustomInput;
