import React, { useEffect, useState } from 'react';
import '../components/Menu.css';
import MenuList from './MenuList';

function Menu() {
  const [type, setType] = useState('Signature');

  const [signatureMenu, setSignatureMenu] = useState(false);
  const [coffeeMenu, setCoffeeMenu] = useState(false);
  const [cookiesMenu, setCookiesMenu] = useState(false);
  const [beverageMenu, setBeverageMenu] = useState(false);

  useEffect(() => {
    setSignatureMenu(true);
  }, []);

  const tabmenuClickEvent = (e) => {
    const val = e.target.getAttribute('data-type');

    if (val === 'Signature') {
      setType('Signature');

      setSignatureMenu(true);
      setCoffeeMenu(false);
      setCookiesMenu(false);
      setBeverageMenu(false);
    } else if (val === 'Coffee') {
      setType('Coffee');

      setSignatureMenu(false);
      setCoffeeMenu(true);
      setCookiesMenu(false);
      setBeverageMenu(false);
    } else if (val === 'Cookies') {
      setType('Cookies');

      setSignatureMenu(false);
      setCoffeeMenu(false);
      setCookiesMenu(true);
      setBeverageMenu(false);
    } else if (val === 'Beverage') {
      setType('Beverage');

      setSignatureMenu(false);
      setCoffeeMenu(false);
      setCookiesMenu(false);
      setBeverageMenu(true);
    }
  };

  return (
    <main>
      <div className="container">
        <section className="menu_tile">MENU</section>

        <div className="tabmenu_wrap">
          <ul>
            <li>
              <a
                href="#!"
                className={signatureMenu ? 'active' : ''}
                onClick={tabmenuClickEvent}
                data-type="Signature"
              >
                Signature
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={coffeeMenu ? 'active' : ''}
                onClick={tabmenuClickEvent}
                data-type="Coffee"
              >
                Coffee
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={cookiesMenu ? 'active' : ''}
                onClick={tabmenuClickEvent}
                data-type="Cookies"
              >
                Cookies
              </a>
            </li>
            <li>
              <a
                href="#!"
                className={beverageMenu ? 'active' : ''}
                onClick={tabmenuClickEvent}
                data-type="Beverage"
              >
                Beverage
              </a>
            </li>
          </ul>
        </div>

        <MenuList type={type} />
      </div>
    </main>
  );
}

export default Menu;
