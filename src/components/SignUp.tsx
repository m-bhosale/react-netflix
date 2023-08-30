import BackgroundImage from './BackgroundImage';
import Header from './Header';
import SignInSignUp from './SignInSignUp';

export default function SignUpComp() {
  return (
    <div className="min-h-screen relative">
    <BackgroundImage imageUrl={"src/assets/login.jpg"} />
    <Header />
    <SignInSignUp signInOrUp={'Sign Up'} signUp={true} signIn={false}/>
  </div>
  );
}
