// ルーティングに関して必要なもののみ　抽出
// Switch => パスを判定して分岐を生成
// Route => 遷移先のパスを指定
import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        // 以降のネストされた画面を準備
        render={({ match: { url } }) => (
          // propsにはルーティングに関する情報が格納されているので確認する
          // 条件分岐
          <Switch>
            {/* 配列の処理 */}
            {Page1Routes.map((route) => (
              // map配下にkeyを入れることを忘れない
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        // 以降のネストされた画面を準備
        render={({ match: { url } }) => (
          // propsにはルーティングに関する情報が格納されているので確認する
          // 条件分岐
          <Switch>
            {/* 配列の処理 */}
            {Page2Routes.map((route) => (
              // map配下にkeyを入れることを忘れない
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      {/* エラー発生時のルーティングを準備 */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
