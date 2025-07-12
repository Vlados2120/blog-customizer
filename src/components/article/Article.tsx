import clsx from 'clsx';
import plane from 'src/images/plane.png';
import { Text } from 'src/components/ui/text';
import styles from './Article.module.scss';

export const Article = () => {
  return (
    <article className={clsx(styles.article)}>
      <Text as='h1' size={45} weight={800} uppercase dynamicLite>
        Портрет Западной Швейцарии
      </Text>

      <div className={styles.titleDescription}>
        <Text size={22} weight={800} uppercase align='center' dynamicLite>
          Примитивист Фиштр расписывает новый бюджетный авиалайнер
        </Text>
      </div>

      <img className={styles.image} src={plane} alt='Картинка самолета' />

      <Text dynamic size={18} fontStyle='italic'>
        Фото: Hans-Peter Gauster , &quot;Bombardier CSeries CS300 HB-JCA&quot; © 2017 CC BY-SA 2.0
      </Text>

      <Text dynamic size={18}>
        В конце 2016 года швейцарская авиакомпания Swiss получила свой первый канадский «Бомбардье CS300»...
      </Text>

      <Text dynamic size={18}>
        Выбор пал на примитивиста Матиаса Форбаша, работающего под псевдонимом Фиштр...
      </Text>

      <Text dynamic size={18}>
        С мая 2017 года &quot;Бомбардье&quot; носит имя &quot;Швейцарская Романдия&quot;...
      </Text>
    </article>
  );
};
