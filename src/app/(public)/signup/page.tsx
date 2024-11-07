import SignupForm from './form';

export default function SignupPage() {
  return (
    <div className="max-w-md w-full mx-auto mt-10 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-gray-500">Enter your information to get started</p>
      </div>
      <SignupForm />
    </div>
  );
}
