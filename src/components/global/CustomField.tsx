"use client";

import { ErrorMessage, Field, FieldAttributes } from "formik";

export default function CustomField({
    name,
    component,
    ...props
}: FieldAttributes<any>): any {
    return (
        <div className='flex flex-col gap-y-1'>
            <Field
                className='border border-Error'
                name={name}
                component={component}
                {...props}
            />
            <ErrorMessage
                name={name}
                render={(msg) => (
                    <div className='text-Error text-sm'>{msg}</div>
                )}
            />
        </div>
    );
}
