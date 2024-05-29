"use client";

import { Formik } from "formik";
import CustomSelect from "../global/CustomSelect";
import CustomInput from "../global/CustomInput";
import CustomButton from "../global/CustomButton";
import CustomLabel from "../global/CustomLabel";
import * as Yup from "yup";
import { isRequiredField } from "@/app/utils";

export default function ChangePassForm() {
    const ChangePassSchema = Yup.object().shape({
        certificate: Yup.string().required("تکمیل این فیلد اجباریست."),
        pin: Yup.string().required("تکمیل این فیلد اجباریست.").nullable(),
        password: Yup.string()
            .required("تکمیل این فیلد اجباریست.")
            .nonNullable(),
    });
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ handleSubmit }) => (
                <form
                    onSubmit={handleSubmit}
                    className='w-full flex flex-col gap-y-5'
                >
                    <CustomSelect
                        name='certificate'
                        label={
                            <CustomLabel
                                label='گواهی'
                                name='certificate'
                                requiredField={isRequiredField(
                                    ChangePassSchema,
                                    "certificate"
                                )}
                            />
                        }
                        options={
                            <>
                                <option value=''>انتخاب نمایید</option>
                                <option value='test0'>
                                    Alireza solgi[sign]Rayan BourseCo.123456789
                                </option>
                                <option value='test1'>
                                    نام توکن تستی رایان بورس
                                </option>
                                <option value='test2'>
                                    نام توکن تستی شرکت
                                </option>
                                <option value='test3'>نام توکن تستی</option>
                            </>
                        }
                    />
                    <CustomInput
                        name='certificatePin'
                        type='password'
                        placeholder='وارد کنید'
                        label={
                            <CustomLabel
                                label='پین گواهی'
                                name='certificatePin'
                                requiredField={isRequiredField(
                                    ChangePassSchema,
                                    "certificate"
                                )}
                            />
                        }
                    />
                    <CustomInput
                        name='prevPassword'
                        type='password'
                        placeholder='وارد کنید'
                        label={
                            <CustomLabel
                                label='رمز عبور قبلی'
                                name='currentPassword'
                                requiredField={isRequiredField(
                                    ChangePassSchema,
                                    "certificate"
                                )}
                            />
                        }
                    />
                    <CustomInput
                        name='newPassword'
                        type='password'
                        placeholder='وارد کنید'
                        label={
                            <CustomLabel
                                label='رمز عبور جدید'
                                name='newPassword'
                                requiredField={isRequiredField(
                                    ChangePassSchema,
                                    "certificate"
                                )}
                            />
                        }
                    />
                    <CustomInput
                        name='confirmPass'
                        type='password'
                        placeholder='وارد کنید'
                        label={
                            <CustomLabel
                                label='تکرار رمز عبور جدید'
                                name='confirmPassword'
                                requiredField={isRequiredField(
                                    ChangePassSchema,
                                    "certificate"
                                )}
                            />
                        }
                    />
                    <CustomButton
                        block
                        extraClass='bg-primaryy mt-3 h-10 rounded-[30px]'
                        text={<span>ذخیره</span>}
                    />
                </form>
            )}
        </Formik>
    );
}
