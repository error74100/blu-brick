import React from 'react';
import '../components/News.css';
import { useNavigate } from 'react-router-dom';

function NewsDetail() {
  const nav = useNavigate();

  const onClickBtn = () => {
    nav('/news');
  };

  return (
    <main>
      <div className="container">
        <section className="menu_tile">NEWS</section>

        <section className="newsdetail_wrap">
          <div className="detail_info_wrap">
            <div className="tit">
              여름이니까~ 빙수의 계절이니까~ 여름이니까~ 빙수의 계절이니까~
            </div>
            <div className="date">2024-05-28</div>
          </div>

          <div className="detail_contbox">
            <div className="img">
              <img
                src="https://cdn.pixabay.com/photo/2024/05/15/12/31/lake-8763490_1280.jpg"
                alt=""
              />
            </div>
            <div className="cont">
              지금 매장에서 만나보세요! 지금 매장에서 만나보세요! 지금 매장에서
              <br />
              만나보세요!
            </div>
          </div>
        </section>

        <section className="bott_btn news_type">
          <button
            type="button"
            onClick={onClickBtn}
            className="btn_basic btn_basic2 big round"
          >
            LIST
          </button>
        </section>
      </div>
    </main>
  );
}

export default NewsDetail;
