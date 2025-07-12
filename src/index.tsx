import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './styles/index.scss';
import styles from './styles/index.module.scss';

import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
  return (
    <div className={styles.main}>
      <ArticleParamsForm />
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
