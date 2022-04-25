import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

// 配列として遷移先を準備
export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/",
    exact: false,
    children: <Page1DetailB />
  }
];
