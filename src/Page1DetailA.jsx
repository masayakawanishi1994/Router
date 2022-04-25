import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  // locationのstateにリンク元で準備した値が格納されている
  // const location = useLocation();
  // 無駄なAPI通信を防ぐことが可能
  const { state } = useLocation();
  const history = useHistory();
  // 遷移元のページに戻る
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページ</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
