import React from 'react';
import { createRoot } from 'react-dom/client';
import AppComponent from 'app/app';
import Home2 from 'app/home2';
import 'flowbite';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

const render = Component => root.render(<Home2 />);

render(AppComponent);
