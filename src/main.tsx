import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store';
import { Provider } from 'react-redux';
import { AppTheme } from './theme/AppTheme';

import '../global-styles.css'
import { AppRouter } from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
      <Provider store={ store }>
        <AppTheme>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </AppTheme>
      </Provider>
  // </React.StrictMode>
)
