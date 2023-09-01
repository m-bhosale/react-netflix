import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import SignIn from "./login/SignIn";
import Home from "./Home";
import SignUpComp from "./login/SignUp";
import SignOut from "./login/SignOut";
const Body = () => {

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


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
