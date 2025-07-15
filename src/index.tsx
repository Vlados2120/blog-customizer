import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.scss';
import styles from './styles/index.module.scss';

import { ArticleParamsForm, Options } from './components/article-params-form/ArticleParamsForm';
import { Article } from './components/article/Article';
import { defaultArticleState } from './constants/articleProps';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
  const [articleStyles, setArticleStyles] = useState<Options>(defaultArticleState);

  return (
    <div className={styles.main}>
      <ArticleParamsForm
        appliedState={articleStyles}
        setAppliedState={setArticleStyles}
      />
      <div
        className={styles.main}
        style={
          {
            '--container-width': articleStyles.contentWidth.value,
            '--font-family': articleStyles.fontFamilyOption.value,
            '--font-size': articleStyles.fontSizeOption.value,
            '--font-color': articleStyles.fontColor.value,
            '--bg-color': articleStyles.backgroundColor.value,
          } as React.CSSProperties
        }
      >
        <Article />
      </div>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

