// import CustomField from "./CustomField";
// import { SelectHTMLAttributes } from "react";

// interface CustomSelect extends SelectHTMLAttributes<HTMLSelectElement> {
//     label?: React.ReactNode;
//     changeLabelPosition?: boolean;
//     options?: React.ReactNode;
// }

// export default function CustomSelect({ ...props }: CustomSelect) {
//     const { label, changeLabelPosition, options, ...rest } = props;
//     return (
//         <CustomField
//             {...rest}
//             component={() => (
//                 <div
//                     className={`flex ${changeLabelPosition ? "flex-row gap-x-3" : "flex-col gap-y-3"}`}
//                 >
//                     {label && label}
//                     <div className='relative'>
//                         <select className='appearance-none w-full' {...rest}>
//                             {options && options}
//                         </select>
//                         <div className='absolute end-[5%] top-1/3 bottom-1/3'>
//                             <svg
//                                 width='14'
//                                 height='8'
//                                 viewBox='0 0 14 8'
//                                 fill='none'
//                                 xmlns='http://www.w3.org/2000/svg'
//                             >
//                                 <path
//                                     fillRule='evenodd'
//                                     clipRule='evenodd'
//                                     d='M0.645978 0.646001C0.692424 0.599438 0.7476 0.562495 0.808345 0.537288C0.86909 0.512082 0.934211 0.499107 0.999978 0.499107C1.06575 0.499107 1.13087 0.512082 1.19161 0.537288C1.25236 0.562495 1.30753 0.599438 1.35398 0.646001L6.99998 6.293L12.646 0.646001C12.6925 0.599513 12.7477 0.562637 12.8084 0.537477C12.8691 0.512318 12.9342 0.499369 13 0.499369C13.0657 0.499369 13.1308 0.512318 13.1916 0.537477C13.2523 0.562637 13.3075 0.599513 13.354 0.646001C13.4005 0.692489 13.4373 0.747678 13.4625 0.808417C13.4877 0.869157 13.5006 0.934257 13.5006 1C13.5006 1.06574 13.4877 1.13085 13.4625 1.19158C13.4373 1.25232 13.4005 1.30751 13.354 1.354L7.35398 7.354C7.30753 7.40056 7.25236 7.43751 7.19161 7.46271C7.13087 7.48792 7.06575 7.50089 6.99998 7.50089C6.93421 7.50089 6.86909 7.48792 6.80834 7.46271C6.7476 7.43751 6.69242 7.40056 6.64598 7.354L0.645978 1.354C0.599415 1.30756 0.562472 1.25238 0.537266 1.19163C0.512059 1.13089 0.499084 1.06577 0.499084 1C0.499084 0.934234 0.512059 0.869112 0.537266 0.808367C0.562472 0.747622 0.599415 0.692447 0.645978 0.646001Z'
//                                     fill='#6B7280'
//                                 />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             label={label}
//         />
//     );
// }

import React from "react";
import { useField, FieldAttributes } from "formik";

interface CustomSelectProps extends FieldAttributes<any> {
    label?: React.ReactNode;
    changeLabelPosition?: boolean;
    options?: React.ReactNode;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    label,
    changeLabelPosition,
    className,
    options,
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
            <div className='relative'>
                <select
                    {...field}
                    {...props}
                    className={`appearance-none w-full ${className} ${
                        meta.touched && meta.error ? "!border-Error" : ""
                    }`}
                >
                    {options}
                </select>

                <div className='absolute end-[5%] top-[50%] -mt-1'>
                    <svg
                        width='14'
                        height='8'
                        viewBox='0 0 14 8'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M0.645978 0.646001C0.692424 0.599438 0.7476 0.562495 0.808345 0.537288C0.86909 0.512082 0.934211 0.499107 0.999978 0.499107C1.06575 0.499107 1.13087 0.512082 1.19161 0.537288C1.25236 0.562495 1.30753 0.599438 1.35398 0.646001L6.99998 6.293L12.646 0.646001C12.6925 0.599513 12.7477 0.562637 12.8084 0.537477C12.8691 0.512318 12.9342 0.499369 13 0.499369C13.0657 0.499369 13.1308 0.512318 13.1916 0.537477C13.2523 0.562637 13.3075 0.599513 13.354 0.646001C13.4005 0.692489 13.4373 0.747678 13.4625 0.808417C13.4877 0.869157 13.5006 0.934257 13.5006 1C13.5006 1.06574 13.4877 1.13085 13.4625 1.19158C13.4373 1.25232 13.4005 1.30751 13.354 1.354L7.35398 7.354C7.30753 7.40056 7.25236 7.43751 7.19161 7.46271C7.13087 7.48792 7.06575 7.50089 6.99998 7.50089C6.93421 7.50089 6.86909 7.48792 6.80834 7.46271C6.7476 7.43751 6.69242 7.40056 6.64598 7.354L0.645978 1.354C0.599415 1.30756 0.562472 1.25238 0.537266 1.19163C0.512059 1.13089 0.499084 1.06577 0.499084 1C0.499084 0.934234 0.512059 0.869112 0.537266 0.808367C0.562472 0.747622 0.599415 0.692447 0.645978 0.646001Z'
                            fill='#6B7280'
                        />
                    </svg>
                </div>
            </div>

            {meta.touched && meta.error ? (
                <div className='text-Error'>{meta.error}</div>
            ) : null}
        </div>
    );
};

export default CustomSelect;
