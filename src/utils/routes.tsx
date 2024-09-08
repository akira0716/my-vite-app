import { Link, RouteObject } from "react-router-dom";
import * as Components from "../utils/index";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Components.Home />,
    children: [],
  },
  {
    path: "page02",
    element: <Link to="page02-1">ページ2-1へ</Link>,
    children: [
      {
        path: "page02-1",
        element: <div>ページ2-1</div>,
        children: [],
      },
    ],
  },
];
