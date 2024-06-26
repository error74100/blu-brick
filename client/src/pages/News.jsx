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
      .get('http://localhost:5000/api/newsList')
      .then((data) => {
        const totalDocs = data.data.totalDocs;

        console.log('totalDocs= ' + totalDocs);
        console.log(data);

        if (
          new Date(data.data.docs[0].date).valueOf() <
          new Date(data.data.docs[data.data.docs.length - 1].date).valueOf()
        ) {
          const sortedData = data.data.docs.slice(0).sort((a, b) => {
            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
          });
          setServerData(sortedData);
        } else {
          setServerData(data.data.docs);
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
                      <span
                        className="thumbnail"
                        style={{
                          backgroundImage: `url(
                            ${data.image}
                          )`,
                        }}
                      ></span>
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
