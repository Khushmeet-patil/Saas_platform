import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <SignUp afterSignUpUrl="/dashboard" /> {/* Redirect to dashboard after sign-up */}
    </div>
  );
}