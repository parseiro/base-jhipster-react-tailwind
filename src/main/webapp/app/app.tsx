import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import 'app/config/dayjs.ts';

import React from 'react';
import { Navbar } from 'app/modules/home/navbar';
import { CallToAction } from 'app/callToAction';
import { Testimonials } from 'app/testimonials';
import { SignUp } from 'app/signUp';
import Footer from 'app/shared/layout/footer/footer';

const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export const App = () => {
  return (
    <>
      <Navbar />
      <CallToAction />
      <Testimonials />
      <SignUp />
      <Footer />
    </>
  );
};

export default App;
