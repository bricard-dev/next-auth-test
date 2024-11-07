import LoginForm from './form';

export default function LoginPage() {
  return (
    <div className="max-w-md w-full mx-auto mt-10 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500">
          Enter your email below to login to your account
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
