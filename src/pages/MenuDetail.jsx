import React, { useEffect } from 'react';
import '../components/MenuDetail.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

function MenuDetail() {
  const nav = useNavigate();

  const onClickBtn = () => {
    nav('/menu');
  };

  return (
    <main>
      <div className="container">
        <section className="menu_tile">22 MENU</section>
      </div>

      <section className="menudetail_wrap">
        <div className="img_box">
          <span className="img">
            <span className="new">NEW</span>
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144_960_720.png"
              alt=""
            />
          </span>
        </div>

        <div className="cont_box">
          <p className="tit">딸기 라떼</p>

          <p className="desc">
            부드러운 우유에 딸기 과육 그대로 넣어 새콤달콤 식감이 살아있는
            딸기라떼
          </p>
          <p className="desc">
            * 제품 영양 정보
            <br />
            1회 제공량 (kcal) : 215
            <br />
            포화지방 (g) : 3<br />
            단백질 (g) : 5<br />
            나트륨 (mg) : 94
            <br />
            당류 (g) : 35
            <br />
            카페인 (mg) : 0
          </p>
        </div>
      </section>

      <section className="bott_btn">
        <button
          type="button"
          onClick={onClickBtn}
          className="btn_basic btn_basic2 big round"
        >
          LIST
        </button>
      </section>
    </main>
  );
}

export default MenuDetail;
