import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={props.shoes[id].img} width="100%" alt="listImg" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-secondary ms-2" onClick={() => history.goBack()}>
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
