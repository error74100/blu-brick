import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Home.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const viewIcon = <FontAwesomeIcon icon={faArrowRightLong} />;
const leftIcon = <FontAwesomeIcon icon={faChevronLeft} />;
const rightIcon = <FontAwesomeIcon icon={faChevronRight} />;

function SliderNextArrow(props) {
  const { onClick } = props;

  return (
    <div className="slider_next_btn" onClick={onClick}>
      {rightIcon}
    </div>
  );
}

function SliderPrevArrow(props) {
  const { onClick } = props;

  return (
    <div className="slider_prev_btn" onClick={onClick}>
      {leftIcon}
    </div>
  );
}

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  var mainSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var newMenuSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <main>
      <section className="main_visual" data-aos="fade-down">
        <Slider {...mainSliderSettings}>
          <div className="visual_item item01">
            <div className="item_txt">
              <div className="txt_wrap">
                <p className="desc">
                  1 달콤X꽃샘의
                  <br />
                  시~원한 만남!
                </p>
                <p className="btn">
                  <button type="button" className="btn_basic2">
                    자세히 보기
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="visual_item item02">
            <div className="item_txt">
              <div className="txt_wrap">
                <p className="desc">
                  2 달콤X꽃샘의
                  <br />
                  시~원한 만남!
                </p>
                <p className="btn">
                  <button type="button" className="btn_basic2">
                    자세히 보기
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="visual_item item03">
            <div className="item_txt">
              <div className="txt_wrap">
                <p className="desc">
                  3 달콤X꽃샘의
                  <br />
                  시~원한 만남!
                </p>
                <p className="btn">
                  <button type="button" className="btn_basic2">
                    자세히 보기
                  </button>
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className="main_newmenu">
        <div className="container">
          <div className="cont_box">
            <div className="left_box" data-aos="fade-right">
              <div className="tit_wrap">
                <p className="subtit">#Strawberry</p>
                <p className="tit">달콤 신메뉴</p>
              </div>
              <p className="desc">
                커피의 전문성을 부각시키는 컨텐츠와 함께 비쥬얼, 맛, 건강함
                그리고 마시는 재미까지 함께 선사합니다.
              </p>
              <p className="btn">
                <a href="#;">
                  View More<span> {viewIcon}</span>
                </a>
              </p>
            </div>

            <div className="right_box" data-aos="fade-up-left">
              <Slider {...newMenuSliderSettings}>
                <div className="slider_item">
                  <p className="thumbnail">
                    <img
                      src="https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144_960_720.png"
                      alt=""
                    />
                  </p>
                  <p className="tit">콜드브루 바닐라</p>
                  <p className="subtit">Cold blew Vanila Blended</p>
                  <p className="desc">
                    부드럽고 달콤한 바닐라 블렌디드에 향긋한 콜드브루를 더해
                    시원하게 마실 수 있는 콜드브루 바닐라 블렌디드
                  </p>
                </div>
                <div className="slider_item">
                  <p className="thumbnail">
                    <img
                      src="https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144_960_720.png"
                      alt=""
                    />
                  </p>
                  <p className="tit">22 콜드브루 바닐라</p>
                  <p className="subtit">Cold blew Vanila Blended</p>
                  <p className="desc">
                    부드럽고 달콤한 바닐라 블렌디드에 향긋한 콜드브루를 더해
                    시원하게 마실 수 있는 콜드브루 바닐라 블렌디드
                  </p>
                </div>
                <div className="slider_item">
                  <p className="thumbnail">
                    <img
                      src="https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144_960_720.png"
                      alt=""
                    />
                  </p>
                  <p className="tit">33 콜드브루 바닐라</p>
                  <p className="subtit">Cold blew Vanila Blended</p>
                  <p className="desc">
                    부드럽고 달콤한 바닐라 블렌디드에 향긋한 콜드브루를 더해
                    시원하게 마실 수 있는 콜드브루 바닐라 블렌디드
                  </p>
                </div>
                <div className="slider_item">
                  <p className="thumbnail">
                    <img
                      src="https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144_960_720.png"
                      alt=""
                    />
                  </p>
                  <p className="tit">44 콜드브루 바닐라</p>
                  <p className="subtit">Cold blew Vanila Blended</p>
                  <p className="desc">
                    부드럽고 달콤한 바닐라 블렌디드에 향긋한 콜드브루를 더해
                    시원하게 마실 수 있는 콜드브루 바닐라 블렌디드
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="main_intro" data-aos="fade-up">
        <div className="container">
          <div className="cont_box">
            <div className="left_box"></div>

            <div className="right_box">
              <div className="tit_wrap">
                <p className="tit">Signature Coffee</p>
              </div>
              <p className="desc">
                <b>시그니처 블랙 포션커피는</b> 달콤의 시그니처 블렌딩을 포션에
                담아 언제 어디서나 쉽고 빠르게 즐길수 있는 데일리
                포션커피입니다.
                <br />
                <br />
                HOT/ICE 구분없이 홈카페, 사무실, 트레킹 등 커피가 필요한
                곳이라면 함께 즐겨보세요!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="main_news" data-aos="fade-down">
        <div className="container">
          <div className="title">NEWS</div>
          <div className="news_wrap">
            <div className="item">
              <a href="#">
                <div className="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2024/05/15/12/31/lake-8763490_1280.jpg"
                    alt=""
                  />
                </div>
                <div className="tit ellipsis">
                  여름이니까~ 빙수의 계절이니까~ 여름이니까~ 빙수의 계절이니까~
                </div>
                <div className="cont ellipsis">
                  지금 매장에서 만나보세요! 지금 매장에서 만나보세요! 지금
                  매장에서 만나보세요!
                </div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2024/05/15/12/31/lake-8763490_1280.jpg"
                    alt=""
                  />
                </div>
                <div className="tit ellipsis">
                  22 여름이니까~ 빙수의 계절이니까~
                </div>
                <div className="cont ellipsis">지금 매장에서 만나보세요!</div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <div className="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2024/05/15/12/31/lake-8763490_1280.jpg"
                    alt=""
                  />
                </div>
                <div className="tit ellipsis">
                  33 여름이니까~ 빙수의 계절이니까~
                </div>
                <div className="cont ellipsis">지금 매장에서 만나보세요!</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="main_link" data-aos="fade-up">
        <div className="container">
          <div className="cont_box">
            <p className="tit">매장에서 직접 구워 맛있습니다.</p>
            <p className="desc">
              블루블릭 감성과 재미를 듬뿍 담아 낸<br />
              블루블릭에서만 맛볼 수 있는 스콘
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
