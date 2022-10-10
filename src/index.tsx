import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { setupStore } from './store/store';
import { ThemeProvider } from './components/Providers/ThemeProvider/ThemeProvider';
import ErrorBoundary from './components/Providers/ErrorBoundary/ErrorBoundary';
import './assets/scss/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = setupStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>,
);
