import React, { useEffect, useState } from 'react';
import '../components/News.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

function NewsDetail() {
  const [serverData, setServerData] = useState([]);
  const params = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/newsDetailfromserver', {
        params: {
          id: params.id,
        },
      })
      .then((data) => {
        setServerData(data.data[0]);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  const onClickBtn = () => {
    nav('/news');
  };

  return (
    <main>
      <div className="container">
        <section className="menu_tile">NEWS</section>

        <section className="newsdetail_wrap">
          <div className="detail_info_wrap">
            <div className="tit">{serverData.title}</div>
            <div className="date">{serverData.date}</div>
          </div>

          <div className="detail_contbox">
            <div className="img">
              <img
                src="https://cdn.pixabay.com/photo/2024/05/15/12/31/lake-8763490_1280.jpg"
                alt=""
              />
            </div>
            <div className="cont">{ReactHtmlParser(serverData.content)}</div>
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
