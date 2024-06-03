import React, { useEffect, useState } from 'react';
import '../components/News.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

function News() {
  const [serverData, setServerData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/readfromserver')
      .then((data) => {
        if (
          new Date(data.data[0].date).valueOf() <
          new Date(data.data[data.data.length - 1].date).valueOf()
        ) {
          const sortedData = data.data.slice(0).sort((a, b) => {
            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
          });
          setServerData(sortedData);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const onClickEvent = () => {
    nav('/newsWrite');
  };

  return (
    <main>
      <div className="container">
        <section className="menu_tile">NEWS</section>

        <section className="newslist_wrap">
          <div className="news_wrap">
            {serverData.map((data, index) => {
              return (
                <div className="item" key={index}>
                  <Link to={`/newsdetail/${data._id}`}>
                    <div className="img">
                      <img
                        src="https://cdn.pixabay.com/photo/2024/05/15/12/31/lake-8763490_1280.jpg"
                        alt=""
                      />
                    </div>
                    <div className="tit ellipsis">{data.title}</div>
                    <div className="cont ellipsis">
                      {ReactHtmlParser(data.content)}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="paging">
            <ul>
              <li className="active">
                <a href="#!">1</a>
              </li>
              <li>
                <a href="#!">2</a>
              </li>
              <li>
                <a href="#!">3</a>
              </li>
              <li>
                <a href="#!">4</a>
              </li>
              <li>
                <a href="#!">5</a>
              </li>
            </ul>
          </div>

          <section className="btn_wrap">
            <button
              type="button"
              onClick={onClickEvent}
              className="btn_basic btn_basic2"
            >
              WRITE
            </button>
          </section>
        </section>
      </div>
    </main>
  );
}

export default News;
