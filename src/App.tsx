import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Error } from './pages/Error';

const navItems = [
  { path: '/products', label: 'Продукция' },
  { path: '/how-to', label: 'Как активировать подгузник?' },
  { path: '/delivery', label: 'Доставка и оплата' },
  { path: '/faq', label: 'FAQ' },
  { path: '/blog', label: 'Блог' },
  { path: '/partnership', label: 'Сотрудничество' },
  { path: '/reviews', label: 'Отзывы' },
  { path: '/careers', label: 'Карьера' }
];

export const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {navItems.map(e => <Route path={e.path}/>)}
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

export default App;