import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader, action as contactAction } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import DestroyContact, { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
        children: [
          {
            path: "edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction
          },
          {
            path: "destroy",
            action: destroyAction
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
