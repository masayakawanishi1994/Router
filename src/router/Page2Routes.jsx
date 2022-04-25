import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

// 配列として遷移先を準備
export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    // :を記述することでURLパラメーターを受け取るということを指す
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
