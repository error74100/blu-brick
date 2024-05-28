import React, { useEffect } from 'react';
import '../components/Menu.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <main>
      <div className="container">
        <section className="menu_tile">MENU</section>

        <div className="tabmenu_wrap">
          <ul>
            <li>
              <a href="#;" className="active">
                Signature
              </a>
            </li>
            <li>
              <a href="#;">Coffee</a>
            </li>
            <li>
              <a href="#;">Cookies</a>
            </li>
            <li>
              <a href="#;">Beverage</a>
            </li>
          </ul>
        </div>

        <section className="menulist_wrap">
          <ul>
            <li>
              <Link to="/menuDetail">
                <span className="new">NEW</span>
                <span className="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144_960_720.png"
                    alt=""
                  />
                </span>
                <span className="tit">딸기 라떼</span>
              </Link>
            </li>
            <li>
              <a href="#;">
                <span className="new">NEW</span>
                <span className="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144_960_720.png"
                    alt=""
                  />
                </span>
                <span className="tit">
                  바닐라 크림 딸기 라떼 바닐라 크림 딸기 라떼
                </span>
              </a>
            </li>
            <li>
              <a href="#;">
                <span className="new">NEW</span>
                <span className="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144_960_720.png"
                    alt=""
                  />
                </span>
                <span className="tit">딸기 라떼</span>
              </a>
            </li>
            <li>
              <a href="#;">
                <span className="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144_960_720.png"
                    alt=""
                  />
                </span>
                <span className="tit">딸기 라떼</span>
              </a>
            </li>
            <li>
              <a href="#;">
                <span className="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144_960_720.png"
                    alt=""
                  />
                </span>
                <span className="tit">딸기 라떼</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Menu;
