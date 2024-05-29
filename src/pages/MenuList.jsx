import React, { useEffect } from 'react';
import '../components/Menu.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { menuList } from '../menuList/menuList';

function MenuList({ type }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const resultList = menuList
    .filter((item) => item.type === type)
    .map((item) => item);

  return (
    <section className="menulist_wrap" data-aos="fade-down">
      <ul>
        {resultList.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/menuDetail/${item.id}`}>
                {item.new === true && <span className="new">NEW</span>}
                <span className="img">
                  <img src={item.image} alt="" />
                </span>
                <span className="tit">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MenuList;
