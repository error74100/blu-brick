import React from 'react';
import '../components/News.css';
import { Link } from 'react-router-dom';

function News() {
  return (
    <main>
      <div className="container">
        <section className="menu_tile">NEWS</section>

        <section className="newslist_wrap">
          <div className="news_wrap">
            <div className="item">
              <Link to="/newsdetail">
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
              </Link>
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
          <div className="paging">
            <ul>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default News;
