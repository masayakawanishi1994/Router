import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  // paramsを受け取る箱を準備
  const { id } = useParams();
  // locationに様々な情報が入っている（hooks）
  // searchに？以降のクエリパラメータが入っている
  const { search } = useLocation();
  // クエリパラメータを便利に扱えるメソッドを準備
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameter</h1>
      <p>id:{id}</p>
      {/* getでクエリパラメーターの名称をキャッチ */}
      <p>UrlParameter:{query.get("name")}</p>
    </div>
  );
};
