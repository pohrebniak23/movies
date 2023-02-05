import { App } from 'app/App';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'shared/assets/scss/main.scss';
import ErrorBoundary from './app/providers/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from './app/providers/ThemeProvider/ThemeProvider';
import { setupStore } from './app/store/store';

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
