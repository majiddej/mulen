"use client";

import { Form, Formik, FormikProps } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import CustomSelect from "../global/CustomSelect";
import CustomInput from "../global/CustomInput";
import CustomButton from "../global/CustomButton";
import CustomLabel from "../global/CustomLabel";
import { fieldRequired } from "../global/validationMsgs";
import { isRequiredField } from "../global/utils";
import { signIn } from "next-auth/react";
// import { useRouter } from "next/router";

export default function LoginForm() {


    // const router = useRouter()
    const SignupSchema = Yup.object().shape({
        username: Yup.string().required(fieldRequired),
        password: Yup.string().required(fieldRequired),
    });

    const handleSubmit = async (formikProps: FormikProps<any>) => {
        console.log(formikProps)
        const res = await signIn("login", {
          redirect: false,
          username: formikProps.values.username,
          password: formikProps.values.password,
          callbackUrl: "/",
        })
          .then((res) => {
            if (res && res.url) {
                // router.push(res.url);
            }
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
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values) => {
                console.log(values)
                await signIn("login", {
                    redirect: false,
                    username: values.username,
                    password: values.password,
                    callbackUrl: "/",
                  })
                    .then((res) => {
                        console.log(res)
                      // @ts-ignore
                      router.push(res.url);
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            }}        >
            {(formikProps) => (
                <Form
                    className='w-full flex flex-col gap-y-5'
                >

                    <CustomInput
                        name='username'
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
                </Form>
            )}
        </Formik>
    );
}
