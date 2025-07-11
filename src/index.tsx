import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, } from 'react';
import clsx from 'clsx';
import { useState } from 'react';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { OptionType, defaultArticleState } from './constants/articleProps';
import { ArrowButton } from './components/ui/arrow-button';



import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

export interface Options {
	fontFamilyOption: OptionType;
	fontSizeOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
}

const App = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [pageState, setPageState] = useState<Options>(defaultArticleState);

	function toggleOpen() {
		setIsOpen((oldVal) => !oldVal);
	}

	function handleClose() {
		setIsOpen(false);
	}

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageState.fontFamilyOption.value,
					'--font-size': pageState.fontSizeOption.value,
					'--font-color': pageState.fontColor.value,
					'--container-width': pageState.contentWidth.value,
					'--bg-color': pageState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				toggleOpen={toggleOpen}
				openState={isOpen}
				setPageState={setPageState}
			/>
			<Article CloseA={handleClose} />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
