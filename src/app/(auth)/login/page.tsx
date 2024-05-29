import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
    return (
        <div className='flex flex-col items-center px-14'>
            <span className='font-medium text-xl'>ورود کاربران</span>
            <LoginForm />
        </div>
    );
}
