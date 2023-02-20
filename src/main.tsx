import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store';
import { Provider } from 'react-redux';
import { AppTheme } from './theme/AppTheme';

import { JustTodoIt } from './ui/JustTodoIt';
import '../global-styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
      <Provider store={ store }>
        <AppTheme>
        <JustTodoIt />
        </AppTheme>
      </Provider>
  // </React.StrictMode>
)
