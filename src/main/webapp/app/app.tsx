import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import 'app/config/dayjs.ts';

import React from 'react';
import { Navbar } from 'app/modules/home/navbar';

const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export const App = () => {
  return <Navbar />;
};

export default App;
