import Browse from "./Browse";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import SignIn from "./SignIn";
import SignUpComp from "./SignUp";
import Home from "./Home";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userSlice";
import SignOut from "./SignOut";
const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/signUp",
      element: <SignUpComp />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/signOut",
      element: <SignOut />,
    },
  ]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid, photoURL } = user;
        dispatch(setUserData({ email, displayName, uid, photoURL }));
      } else {
        console.log("sign out and clear redux user state");
        dispatch(setUserData({}));
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
