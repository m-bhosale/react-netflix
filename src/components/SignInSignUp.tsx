import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {
  createUserWithEmail,
  signInWithEmail,
  useCreateUser,
} from "../helper/api/login";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userSlice";

function SignInSignUp({ signInOrUp, signIn, signUp }: any) {
  const [loginError, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updatedDisplayname = (user,userName) => {
    console.log("user in update profile", user);
    
    const { email, uid, photoURL } = user;
    dispatch(setUserData({ email, displayName:userName, uid, photoURL }));
  };
  const validationSchema = Yup.object().shape({
    // Define your validation rules here
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must be at least 8 characters long, and contain at least one letter, one number, and one special character"
      ),
    username: signUp && Yup.string().required("Username is required"),
  });
  const HandleSignInSignUp = (inputData: any) => {
    if (signIn) {
      signInWithEmail(inputData.email, inputData.password)
        .then((user) => {
          navigate("/home");
        })
        .catch((err) => {
          setError(`Incorrect username or password`);
          console.log("Error while sing in ");
        });
    } else {
      const data = createUserWithEmail(
        inputData.email,
        inputData.password,
        inputData.username
      )
        .then((user) => {
          console.log(user);
          updatedDisplayname(user,inputData.username);
          navigate("/home");
        })
        .catch((err) => {
          setError(`Incorrect username or password`);
          console.log("Error while sing in ");
        });
    }
  };
  return (
    <div>
      <div className="absolute inset-0 flex items-center justify-center z-10 ">
        <div className="w-full md:w-3/12 bg-gradient-to-b from-transparent to-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-md w-full md:w-[30rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem]">
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                // Handle form submission
                // Call HandleSignInSignUp function
                HandleSignInSignUp(values);
                if (loginError) {
                  console.log("hello");
                  resetForm({ values });
                }
                // Set submitting state to false after form submission
              }}
            >
              {({ isSubmitting }) => (
                <Form className="w-full p-4 md:p-11 m-0">
                  <h1 className="text-white mb-8 text-2xl md:text-4xl font-medium ">
                    {signInOrUp}
                  </h1>
                  {signUp && (
                    <div className="mb-5">
                      <Field
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="p-2.5 bg-neutral-700 w-full rounded focus:outline-none focus:ring focus:border-blue-400 text-cyan-50"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  )}
                  <div className="mb-5">
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email or phone number"
                      className="p-2.5 bg-neutral-700 w-full rounded focus:outline-none focus:ring focus:border-blue-400 text-cyan-50"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-12">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="p-2.5 bg-neutral-700 w-full rounded focus:outline-none focus:ring focus:border-blue-400 text-cyan-50"
                    />
                    {!signIn && (
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700"
                    disabled={isSubmitting} // Disable the button during form submission
                  >
                    {signInOrUp}
                  </button>
                  {loginError && (
                    <div className="text-red-500 text-sm">{loginError}</div>
                  )}
                  <div className="flex items-center justify-between mb-11 md:mb-16">
                    <div className="flex items-center ">
                      <input
                        type="checkbox"
                        className="bg-neutral-600 enabled:hover:border-gray-400"
                      />
                      <span className="text-neutral-500 pl-2 p-2">
                        Remember Me
                      </span>
                    </div>

                    <span className="text-neutral-500">Need Help ?</span>
                  </div>
                  {(signIn || signUp) && (
                    <div className="text-neutral-500 mb-4 ">
                      <h1>
                        {signIn ? "New to Netflix " : "Existing User "}
                        <Link
                          to={signIn ? "/signUp" : "/"}
                          className="text-white"
                        >
                          <span className="text-white p-2  ">
                            {" "}
                            {signIn ? " Sign Up" : " Sign In"}
                          </span>{" "}
                        </Link>
                      </h1>
                      <h3 className="text-sm mt-2">
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot.{" "}
                        <a href="" className="text-blue-600">
                          Learn More
                        </a>
                      </h3>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInSignUp;
