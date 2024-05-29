"use client";

import { Formik } from "formik";
import CustomInput from "../global/CustomInput";
import useCountDownTimer from "@/hooks/useCountDownTimer";
import CustomButton from "../global/CustomButton";
import { useRouter } from "next/navigation";

export default function ForgetPassCodeForm() {
    const router = useRouter();
    const returnTimer = useCountDownTimer(180);

    return (
        <Formik
            initialValues={{ code: "" }}
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
                    <p className='text-blackText'>
                        کد تایید برای شماره 09383737108 پیامک شد.
                    </p>
                    <CustomInput
                        name='code'
                        placeholder='وارد کنید'
                        label={<label htmlFor='code'>کد تایید</label>}
                    />
                    {returnTimer.minute === 0 && returnTimer.second === 0 ? (
                        <div className='flex gap-x-2 justify-center items-center'>
                            <p className='text-blackText'>
                                دریافت مجدد کد تایید از طریق:
                            </p>
                            <CustomButton
                                onClick={() => router.push("/forget-pass")}
                                text={
                                    <div className='flex gap-x-1 items-center justify-center'>
                                        <svg
                                            width='13'
                                            height='11'
                                            viewBox='0 0 13 11'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M0.220459 2.52757C0.220459 2.11654 0.38374 1.72235 0.674381 1.43171C0.965023 1.14106 1.35922 0.977783 1.77025 0.977783H11.069C11.48 0.977783 11.8742 1.14106 12.1648 1.43171C12.4555 1.72235 12.6188 2.11654 12.6188 2.52757V8.72672C12.6188 9.13775 12.4555 9.53195 12.1648 9.82259C11.8742 10.1132 11.48 10.2765 11.069 10.2765H1.77025C1.35922 10.2765 0.965023 10.1132 0.674381 9.82259C0.38374 9.53195 0.220459 9.13775 0.220459 8.72672V2.52757ZM1.77025 1.75268C1.56473 1.75268 1.36764 1.83432 1.22231 1.97964C1.07699 2.12496 0.995353 2.32206 0.995353 2.52757V2.69572L6.41961 5.95028L11.8439 2.69572V2.52757C11.8439 2.32206 11.7622 2.12496 11.6169 1.97964C11.4716 1.83432 11.2745 1.75268 11.069 1.75268H1.77025ZM11.8439 3.59925L8.15692 5.81157L11.8439 8.04017V3.60002V3.59925ZM11.8175 8.92897L7.4045 6.26256L6.41961 6.8538L5.43395 6.26256L1.0217 8.9282C1.06602 9.0928 1.16339 9.2382 1.29871 9.34187C1.43404 9.44554 1.59978 9.50168 1.77025 9.50162H11.069C11.2393 9.50173 11.405 9.44569 11.5403 9.34218C11.6756 9.23866 11.7731 9.09343 11.8175 8.92897V8.92897ZM0.995353 8.04017L4.6823 5.81157L0.995353 3.59925V8.03939V8.04017Z'
                                                fill='#862C50'
                                            />
                                        </svg>
                                        <span className='text-secondary-3'>
                                            پیامک
                                        </span>
                                    </div>
                                }
                                extraClass='bg-[#F2F2F2]'
                            />
                        </div>
                    ) : (
                        <div className='flex gap-x-2'>
                            <p className='text-blackText'>
                                زمان باقی مانده تا دریافت مجدد کد تایید:
                            </p>

                            {String(returnTimer.minute).padStart(2, "0") +
                                ":" +
                                String(returnTimer.second).padStart(2, "0")}
                        </div>
                    )}

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
