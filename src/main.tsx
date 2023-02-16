import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppTheme } from './theme/AppTheme';
import { App } from './App';
import '../global-styles.css'
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <AppTheme>
      <Provider store={ store }>
      <App />
      </Provider>
    </AppTheme>
  // </React.StrictMode>
)
