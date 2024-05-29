import * as Yup from "yup";
import {
    // VALIDATION_FIELD_FILE_BIG,
    // VALIDATION_FIELD_FILE_WRONG_TYPE,
    fieldOnlyDecimal,
    fieldRequired,
} from "./validationMsgs";
import {
    // checkIfFilesAreImagePdfType,
    // checkIfFilesAreImageType,
    // checkIfFilesAreTooBig,
    checkIfStringIsGreaterThan,
    verifyIranianNationalId,
} from "./validationFunctions";

const farsiWithoutNumRegex =
    /^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F ]+$/;
const farsiWithNumRegex =
    /^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F0-9\s ]+$/;
const farsiWithSpecial =
    /^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F0-9\s,\-_]+$/;
const numberOnlyRegex = /^[0-9]+$/;
export const dateFormatRegex =
    /^\d{4}\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/;
const telNumRegex = /^0\d{2,3}(-|)\d{5,8}$/;
const shenasNameRegex = /\d{1,10}$/;
const passportRegex = /^[A-Za-z]\d{8}$/;
export const mobileRegex = /^09\d{9}$/;
const postalCodeRegex =
    /([1|3-9][1-9][1-9][1-9][1|6-9][1-9][1-9][1-9][1-9][1-9])|([1|3-9][1-9][1-9][1-9]5-d{1,3})/;
const twoDigisAfterPointRegex = (value: any) => /^\d+(\.\d{0,2})?$/.test(value);

export const passwordSchema = Yup.string().required().min(8);

export const farsiCharacter = Yup.string().matches(
    farsiWithNumRegex,
    "مقدار وارد شده صحیح نمی باشد"
);

export const farsiCharacterSpecial = Yup.string().matches(
    farsiWithSpecial,
    "مقدار وارد شده صحیح نمی باشد"
);

export const farsiAlphabet = Yup.string().matches(
    farsiWithoutNumRegex,
    "مقدار وارد شده صحیح نمی باشد"
);
export const generalFarsiSpecialCharFieldRequired = Yup.string()
    .required(fieldRequired)
    .concat(farsiCharacterSpecial)
    .nullable();

export const generalFarsiSpecialCharField = Yup.string()
    .concat(farsiCharacterSpecial)
    .nullable();

export const generalFarsiCharFieldRequired = Yup.string()
    .required(fieldRequired)
    .concat(farsiCharacter)
    .nullable();

export const generalFarsiCharField = Yup.string()
    .concat(farsiCharacter)
    .nullable();

export const generalFarsiAlphaFieldRequired = Yup.string()
    .required(fieldRequired)
    .concat(farsiAlphabet)
    .nullable();

export const generalFarsiAlphaField = Yup.string()
    .concat(farsiAlphabet)
    .nullable();

export const generalRequireField = Yup.string()
    .required(fieldRequired)
    .nullable();

export const generalNumericField = Yup.string()
    .matches(numberOnlyRegex, "مقدار وارد شده صحیح نمی باشد")
    .nullable();

export const telNumberFiled = Yup.string()
    .matches(telNumRegex, "مقدار وارد شده صحیح نمی باشد")
    .nullable();

export const shenasNameField = Yup.string()
    .matches(shenasNameRegex, "مقدار وارد شده صحیح نمی باشد")
    .nullable();

export const passportField = Yup.string()
    .matches(passportRegex, "مقدار وارد شده صحیح نمی باشد")
    .nullable();

export const mobileField = Yup.string()
    .matches(mobileRegex, "مقدار وارد شده صحیح نمی باشد")
    .nullable();

export const postalCodeField = Yup.string()
    .matches(postalCodeRegex, "مقدار وارد شده صحیح نمی باشد")
    .nullable();

export const generalDateField = Yup.string()
    .matches(dateFormatRegex, "مقدار وارد شده صحیح نمی باشد")
    .nullable();

export const generalDateFieldRequired = Yup.string()
    .matches(dateFormatRegex, "مقدار وارد شده صحیح نمی باشد")
    .required(fieldRequired)
    .nullable();

export const generalRequireWithMaxField = (max: number) =>
    Yup.string().max(max, "مقدار وارد شده معتبر نیست").nullable();

export const generalWithMaxField = (max: number) =>
    Yup.string().max(max, "مقدار وارد شده معتبر نیست").nullable();

export const generalFarsiCharWithMaxField = (max: number) =>
    Yup.string()
        .matches(farsiWithoutNumRegex, "مقدار وارد شده صحیح نمی باشد")
        .max(max, "سری شناسنامه اشتباه وارد شده است")
        .nullable();

// export const generalFileField = (type: string) =>
//     Yup.mixed()
//         .test(
//             "is-correct-file",
//             VALIDATION_FIELD_FILE_BIG,
//             checkIfFilesAreTooBig
//         )
//         .test(
//             "is-big-file",
//             VALIDATION_FIELD_FILE_WRONG_TYPE,
//             type === "image"
//                 ? checkIfFilesAreImageType
//                 : checkIfFilesAreImagePdfType
//         )
//         .nullable();

export const nationalIdFiled = Yup.string()
    .concat(generalNumericField)
    .test(
        "is-correct-nationalId",
        "کد ملی وارد شده معتبر نمی‌باشد",
        verifyIranianNationalId
    )
    .nullable();

export const isGreterThan = (greater: number) =>
    Yup.string().test(
        "is-number-greate-than",
        `عدد وارد شده باید کوچکتر از ${greater} باشد`,
        (num) => checkIfStringIsGreaterThan(num, greater)
    );

export const decimalOnly = Yup.string().test(
    "Decimal only",
    fieldOnlyDecimal,
    twoDigisAfterPointRegex
);

// export const requiredIfThis = (name: string, theValue: string) => {
//     return Yup.mixed().when(name, {
//         is: theValue,
//         then: Yup.string().required(fieldRequired),
//         otherwise: Yup.string().nullable(),
//     });
// };

export const registerInquiryformInitialValues = {
    nationalCode: "",
    birthDate: "",
    name: "",
    family: "",
};
export const shahkarInquiryformInitialValues = {
    mobileNumber: "",
    email: "",
};
export const inquiryValidationSchema = Yup.object().shape({
    nationalCode: Yup.string().concat(nationalIdFiled).required(fieldRequired),
    birthDate: generalDateFieldRequired,
});

export const shahkarValidationSchema = Yup.object().shape({
    mobileNumber: Yup.string().concat(mobileField).required(fieldRequired),
    email: Yup.string().required(fieldRequired),
});
