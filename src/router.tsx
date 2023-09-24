import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Main, Detail } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "/characters/:id",
        element: <Detail />
      }
    ],
    errorElement: <Main />
  }
]);

export default router;
