import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import SignIn from "./SignIn";
import SignUpComp from "./SignUp";
import Home from "./Home";
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
        element:<Home/>
      }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
