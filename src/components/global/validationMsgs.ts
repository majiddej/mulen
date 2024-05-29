export const fieldRequired = "فیلد الزامی است.";
export const fieldMin = (value: number) =>
    `Must be exactly ${value} characters.`;
export const patternTwoDigisAfterPoint = (value: string) =>
    /^\d+(\.\d{0,2})?$/.test(value);
export const digitsOnly = (value: string) => /^\d+$/.test(value);
export const fieldOnlyDigits = "لطفا فقط عدد وارد نمایید.";
export const fieldOnlyDecimal = "لطفا عدد تا دو رقم اعشار وارد نمایید.";
export const fieldLessThanEqual = (value: number) =>
    `لطفا عدد کوچکتر مساوی ${value} وارد نمایید.`;
export const VALIDATION_FIELD_FILE_BIG =
    "حجم فایل بیشتر از حداکثر مجاز می باشد";
export const VALIDATION_FIELD_FILE_WRONG_TYPE =
    "فرمت فایل وارد شده قابل قبول نیست";
export const COMPANY_NATIONAL_CODE_MIN_LENGTH: string =
    "شناسه ملی باید ۱۱ رقم باشد";
