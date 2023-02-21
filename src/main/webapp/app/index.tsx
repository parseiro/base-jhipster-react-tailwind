import React from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from 'app/shared/error/error-boundary';
import AppComponent from 'app/app';
import 'flowbite';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

const render = Component =>
  root.render(
    <ErrorBoundary>
      <div>
        <Component />
      </div>
    </ErrorBoundary>
  );

render(AppComponent);
