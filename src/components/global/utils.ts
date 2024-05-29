import { getIn } from "formik";
import { ObjectSchema } from "yup";
import { toast, ToastContent, ToastOptions, Id } from "react-toastify";

/**
 * Determines if a given field is required based on the validation schema
 *
 * @param {ObjectSchema<any>} validationSchema - The validation schema object
 * @param {string} name - The name of the field to check
 * @returns {boolean} - True if the field is required, false otherwise
 */
export const isRequiredField = (
    validationSchema: ObjectSchema<any>,
    name: string
): boolean => {
    const schemaDescription = validationSchema.describe();
    const accessor = name.split(".").join(".fields.");
    const field = getIn(schemaDescription.fields, accessor);
    if (!field) {
        return false;
    }

    return field.tests.some(
        (test: { name: string }) => test.name === "required"
    );
};

type ToastType = "success" | "error" | "info" | "warning" | "default";

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
export const showToast = (
    type: ToastType,
    content: ToastContent,
    options: Partial<ToastOptions> = {}
): Id => {
    options.className = "bg-white";

    switch (type) {
        case "success":
            return toast.success(content, options);
        case "error":
            return toast.error(content, options);
        case "info":
            return toast.info(content, options);
        case "warning":
            return toast.warn(content, options);
        case "default":
            return toast(content, options);
        default:
            return toast(content, options);
    }
};
