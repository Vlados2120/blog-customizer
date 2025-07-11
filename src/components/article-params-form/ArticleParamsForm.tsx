import clsx from 'clsx';
import { useState } from 'react';
import { ArrowButton } from 'src/components/ui/arrow-button';
import { Button } from 'src/components/ui/button';
import { RadioGroup } from '../ui/radio-group';
import { Text } from '../ui/text';
import { Separator } from 'src/components/ui/separator';
import styles from './ArticleParamsForm.module.scss';
import { OnClick } from '../ui/arrow-button/ArrowButton';
import { OptionType, fontFamilyOptions } from 'src/constants/articleProps';
import { fontSizeOptions } from 'src/constants/articleProps';
import { fontColors } from 'src/constants/articleProps';
import { backgroundColors } from 'src/constants/articleProps';
import { contentWidthArr } from 'src/constants/articleProps';
import { Options } from 'src/index';
import { defaultArticleState } from 'src/constants/articleProps';
import { Select } from '../ui/select';

export type ChangeSelectFn = (selection: OptionType) => void;

interface PropsArticleParamsForm {
	toggleOpen: OnClick;
	openState: boolean;
	setPageState: React.Dispatch<React.SetStateAction<Options>>;
}

export const ArticleParamsForm = ({
	toggleOpen,
	openState,
	setPageState,
}: PropsArticleParamsForm) => {
	const [formState, setFormState] = useState<Options>(defaultArticleState);

	function setDefaultOptions() {
		setFormState(defaultArticleState);
		setPageState(defaultArticleState);
	}

	function submitForm(evt: React.SyntheticEvent) {
		evt.preventDefault();
		setPageState(formState);
	}

	return (
		<>
			<ArrowButton toggleOpen={toggleOpen} openState={openState} />
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: open,
				})}>
				<form className={styles.form} onSubmit={submitForm}>
					<Text as='h1' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								fontFamilyOption: selected,
							}))
						}
					/>
					<RadioGroup
						title='размер шрифта'
						name='font-size'
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								fontSizeOption: selected,
							}))
						}
					/>
					<Select
						title='цвет шрифта'
						selected={formState.fontColor}
						options={fontColors}
						onChange={(selected) =>
							setFormState((oldState) => ({ ...oldState, fontColor: selected }))
						}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								backgroundColor: selected,
							}))
						}
					/>
					<Select
						title='ширина контента'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								contentWidth: selected,
							}))
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='clear' onClick={setDefaultOptions} />
						<Button title='Применить' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
