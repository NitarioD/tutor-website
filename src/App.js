import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Contact, NavBar } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
