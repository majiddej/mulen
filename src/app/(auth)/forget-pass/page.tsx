import AuthHeading from "@/components/auth/AuthHeading";
import ForgetPassForm from "@/components/auth/ForgetPassFrom";

export default function ForgetPass() {
    return (
        <div className='flex flex-col items-center px-14 gap-y-8'>
            <AuthHeading heading='فراموشی کلمه عبور' needBackButton={true} />
            <ForgetPassForm />
        </div>
    );
}
