"use client";

import { Formik } from "formik";
import CustomSelect from "../global/CustomSelect";
import CustomInput from "../global/CustomInput";
import { useRouter } from "next/navigation";
import CustomButton from "../global/CustomButton";

export default function ForgetPassForm() {
    const router = useRouter();

    return (
        <Formik
            initialValues={{ certificate: "", pin: "" }}
            onSubmit={() => router.push("/forget-pass-code")}
        >
            {({ handleSubmit }) => (
                <form
                    onSubmit={handleSubmit}
                    className='w-full flex flex-col gap-y-4'
                >
                    <CustomSelect
                        name='certificate'
                        label={<label htmlFor='certificate'>گواهی</label>}
                        options={
                            <>
                                <option value=''>انتخاب نمایید</option>
                            </>
                        }
                    />
                    <CustomInput
                        name='pin'
                        type='text'
                        placeholder='وارد کنید'
                        label={<label htmlFor='pin'>پین گواهی</label>}
                    />
                    <CustomButton
                        block
                        extraClass='bg-primaryy mt-3 h-10 rounded-[30px]'
                        text={<span>ادامه</span>}
                    />
                </form>
            )}
        </Formik>
    );
}
