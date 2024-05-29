import AuthHeading from "@/components/auth/AuthHeading";
import ForgetPassCodeForm from "@/components/auth/ForgetPassCodeFrom";

export default function ForgetPassCode() {
    return (
        <div className='flex flex-col items-center px-14 gap-y-8'>
            <AuthHeading heading='فراموشی کلمه عبور' needBackButton={true} />
            <ForgetPassCodeForm />
        </div>
    );
}
