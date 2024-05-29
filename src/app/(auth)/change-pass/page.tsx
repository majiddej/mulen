import AuthHeading from "@/components/auth/AuthHeading";
import ChangePassForm from "@/components/auth/ChangePassForm";

export default function changePass() {
    return (
        <div className='flex flex-col items-center px-14 gap-y-8'>
            <AuthHeading heading='تغییر کلمه عبور' needBackButton={true} />
            <ChangePassForm />
        </div>
    );
}
