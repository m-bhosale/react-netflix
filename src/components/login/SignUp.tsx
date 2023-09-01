import BackgroundImage from '../BackgroundImage';
import Header from '../Header';
import SignInSignUp from './SignInSignUp';

export default function SignUpComp() {
  return (
    <div className="min-h-screen relative">
      {/* Use relative path from the root of the 'public' directory */}
      <BackgroundImage imageUrl="/login.jpg" />
      <Header />
      <SignInSignUp signInOrUp="Sign Up" signUp={true} signIn={false}/>
    </div>
  );
}
