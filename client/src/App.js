import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Menu from './pages/Menu';
import News from './pages/News';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuDetail from './pages/MenuDetail';
import NewsDetail from './pages/NewsDetail';
import SampleWrite from './components/SampleWrite';
import SampleRead from './components/SampleRead';
import NewsWrite from './pages/NewsWrite';
import NewsEdit from './pages/NewsEdit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menuDetail/:id" element={<MenuDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsDetail/:id" element={<NewsDetail />} />
          <Route path="/newsEdit/:id" element={<NewsEdit />} />
          <Route path="/newsWrite" element={<NewsWrite />} />

          <Route path="/read" element={<SampleRead />} />
          <Route path="/write" element={<SampleWrite />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
