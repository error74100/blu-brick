import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const nav = useNavigate();

  const onClickBtn = () => {
    nav('/');
  };

  return (
    <main className="sub_main">
      <section className="container">
        <div className="notFoundPage">
          <p className="tit">원하시는 페이지를 찾을 수 없습니다.</p>
          <p>
            찾으려는 페이지의 주소가 잘못 입력되었거나,
            <br />
            입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.
          </p>
          <button
            type="button"
            onClick={onClickBtn}
            className="btn_basic btn_basic2 big round"
          >
            메인으로 가기
          </button>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
