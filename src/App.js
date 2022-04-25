// BrowserRouter => ルーティングを行う場所を囲う
// Link => Link to （遷移先のパスを指定）に用いる
import { BrowserRouter, Link } from "react-router-dom";

import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* 各ページへのリンクを準備 */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
      </div>
      {/* ルーティングに関して分離 */}
      <Router />
    </BrowserRouter>
  );
}
