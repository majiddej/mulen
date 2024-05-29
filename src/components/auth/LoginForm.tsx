"use client";

import { Formik, FormikProps } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import CustomSelect from "../global/CustomSelect";
import CustomInput from "../global/CustomInput";
import CustomButton from "../global/CustomButton";
import CustomLabel from "../global/CustomLabel";
import { fieldRequired } from "../global/validationMsgs";
import { isRequiredField } from "../global/utils";
import { signIn } from "next-auth/react";

export default function LoginForm() {
    const SignupSchema = Yup.object().shape({
        certificate: Yup.string().required(fieldRequired),
        pin: Yup.string().required(fieldRequired),
        password: Yup.string().required(fieldRequired),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),

        filan: Yup.object().shape({
            password: Yup.string().required(fieldRequired),
        }),
    });

    const handleSubmit = async (formikProps: FormikProps<any>) => {
        console.log(formikProps)
        const res = await signIn("login", {
          redirect: false,
          national_code: formikProps.values.national_code,
          password: formikProps.values.password,
          captcha_value: formikProps.values.captcha_value,
          callbackUrl: "/",
        })
          .then((res) => {
            // @ts-ignore
            router.push(res.url);
          })
          .catch((err) => {
              console.log(err)
          });

          formikProps.setSubmitting(false);
      }

    // const getStyles = (errors: any, fieldName: string) => {
    //     if (getIn(errors, fieldName)) {
    //         return "border-Error border";
    //     }
    // };
    return (
        <Formik
            validationSchema={SignupSchema}
            initialValues={{ certificate: "", pin: "", password: "" }}
            onSubmit={(values) => {
                console.log("values", values);
            }}
        >
            {(formikProps) => (
                <form
                    onSubmit={() => handleSubmit(formikProps)}
                    className='w-full flex flex-col gap-y-5'
                >

                    <CustomInput
                        name='pin'
                        type='text'
                        placeholder='وارد کنید'
                        label={
                            <CustomLabel
                                label='username'
                                name='certificate'
                                requiredField={isRequiredField(
                                    SignupSchema,
                                    "certificate"
                                )}
                            />
                        }
                    />
                    <CustomInput
                        name='password'
                        type='password'
                        placeholder='وارد کنید'
                        label={
                            <CustomLabel
                                label='رمز عبور'
                                name='password'
                                requiredField={isRequiredField(
                                    SignupSchema,
                                    "password"
                                )}
                            />
                        }
                    />
                    <CustomButton
                        block
                        extraClass='bg-primaryy mt-3 h-10 rounded-[30px]'
                        text={<span>ورود</span>}
                    />

                    <div className='flex flex-row items-center justify-center gap-x-[0.5rem]'>
                        <Link
                            href={"/change-pass"}
                            className='flex flex-row underline items-center text-primaryy
                                text-[0.8125rem]/[1.271875rem] gap-x-[0.5rem]'
                        >
                            <span>تغییر رمز عبور</span>
                        </Link>
                        |
                        <Link
                            href={"/forget-pass"}
                            className='flex flex-row underline items-center text-primaryy
                                text-[0.8125rem]/[1.271875rem] gap-x-[0.5rem]'
                        >
                            <span>فراموشی رمز عبور</span>
                        </Link>
                    </div>
                </form>
            )}
        </Formik>
    );
}
