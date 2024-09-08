import { Link } from "react-router-dom";
import * as Components from "../utils/index";

export const routes: Route[] = [
  {
    path: "/",
    element: <Components.Home />,
    children: null,
  },
  {
    path: "page02",
    element: <Link to="page02-1">ページ2-1へ</Link>,
    children: [
      {
        path: "page02-1",
        element: <div>ページ2-1</div>,
        children: null,
      },
    ],
  },
];

interface Route {
  path: string;
  element: JSX.Element;
  children: Route[] | null;
}
