import React, { useEffect } from 'react';
import '../components/MenuDetail.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate, useParams } from 'react-router-dom';
import { menuList } from '../menuList/menuList';

function MenuDetail() {
  useEffect(() => {
    AOS.init();
  }, []);

  const nav = useNavigate();
  const params = useParams();

  const resultList = menuList.filter(
    (item) => Number(item.id) === Number(params.id)
  );

  const ingredient = resultList[0].ingredient.split('/');

  const onClickBtn = () => {
    nav('/menu');
  };

  return (
    <main>
      <div className="container">
        <section className="menu_tile">MENU</section>
      </div>

      <section className="menudetail_wrap">
        <div className="img_box" data-aos="fade-up">
          <span className="img">
            {resultList[0].new === true && <span className="new">NEW</span>}
            <img src={resultList[0].image} alt="" />
          </span>
        </div>

        <div className="cont_box" data-aos="fade-up">
          <p className="tit">{resultList[0].name}</p>

          <p className="desc">{resultList[0].description}</p>
          <p className="desc">
            * 제품 영양 정보
            <br />
            {ingredient.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
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
