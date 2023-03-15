import * as React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClientRoutes } from "./utils/routs";
import FirstPage from "./Pages/MainPage/FirstPage";
import SecondPage from "./Pages/SecondPage/SecondPage";
import ThiredPage from "./Pages/ThiredPage/ThiredPage";
import LastPage from "./Pages/LastPage/LastPage";

const router = createBrowserRouter([
  {
    path: ClientRoutes.firstPage,
    element: <FirstPage />,
  },
  {
    path: ClientRoutes.secondPage,
    element: <SecondPage />,
  },
  {
    path: ClientRoutes.thiredPage,
    element: <ThiredPage />,
  },
  {
    path: ClientRoutes.lastpage,
    element: <LastPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
