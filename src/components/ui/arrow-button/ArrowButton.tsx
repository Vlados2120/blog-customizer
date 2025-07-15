import arrow from 'src/images/arrow.svg'; /* не понимаю почему не отображается кнопка*/

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

export type OnClick = () => void;

interface PropsArrowButton {
	toggleOpen: OnClick;
	openState: boolean;
}

export const ArrowButton = ({ toggleOpen, openState }: PropsArrowButton) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={toggleOpen}
			className={clsx({
				[styles.container]: true,
				[styles.container_open]: openState,
			})}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx({
					[styles.arrow]: true,
					[styles.arrow_open]: openState,
				})}
			/>
		</div>
	);
};