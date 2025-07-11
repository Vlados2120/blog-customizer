import clsx from 'clsx';
import { useState, useRef } from 'react';
import { ArrowButton } from 'src/components/ui/arrow-button';
import { Button } from 'src/components/ui/button';
import { RadioGroup } from '../ui/radio-group';
import { Text } from '../ui/text';
import { Separator } from 'src/components/ui/separator';
import styles from './ArticleParamsForm.module.scss';
import { OptionType, fontFamilyOptions, fontSizeOptions, fontColors, backgroundColors, contentWidthArr } from 'src/constants/articleProps';
import { Select } from '../ui/select';
import { defaultArticleState } from 'src/constants/articleProps';
import { Options } from 'src/index';
import { useOutsideClickClose } from '../ui/select/hooks/useOutsideClickClose';

export type ChangeSelectFn = (selection: OptionType) => void;

interface PropsArticleParamsForm {
  toggleOpen: () => void;
  openState: boolean;
  setPageState: React.Dispatch<React.SetStateAction<Options>>;
}

export const ArticleParamsForm = ({
  toggleOpen,
  openState,
  setPageState,
}: PropsArticleParamsForm) => {
  const [formState, setFormState] = useState<Options>(defaultArticleState);

  const asideRef = useRef<HTMLDivElement>(null);


  useOutsideClickClose({
    isOpen: openState,
    onChange: toggleOpen,
    rootRef: asideRef,
  });

  function setDefaultOptions() {
    setFormState(defaultArticleState);
    setPageState(defaultArticleState);
  }

  function submitForm(evt: React.SyntheticEvent) {
    evt.preventDefault();
    setPageState(formState);
  }

  function handleChange(field: keyof Options, selected: OptionType) {
    setFormState((oldState) => ({
      ...oldState,
      [field]: selected,
    }));
  }

  return (
    <>
      <div ref={asideRef}>
        <ArrowButton toggleOpen={toggleOpen} openState={openState} />
      </div>

      <aside
        className={clsx({
          [styles.container]: true,
          [styles.container_open]: openState, 
        })}
        ref={asideRef}
      >
        <form className={styles.form} onSubmit={submitForm}>
          <Text as='h1' size={31} weight={800} uppercase dynamicLite>
            Задайте параметры
          </Text>

          <Select
            title='шрифт'
            selected={formState.fontFamilyOption}
            options={fontFamilyOptions}
            onChange={(selected) => handleChange('fontFamilyOption', selected)}
          />

          <RadioGroup
            title='размер шрифта'
            name='font-size'
            selected={formState.fontSizeOption}
            options={fontSizeOptions}
            onChange={(selected) => handleChange('fontSizeOption', selected)}
          />

          <Select
            title='цвет шрифта'
            selected={formState.fontColor}
            options={fontColors}
            onChange={(selected) => handleChange('fontColor', selected)}
          />

          <Separator />

          <Select
            title='цвет фона'
            selected={formState.backgroundColor}
            options={backgroundColors}
            onChange={(selected) => handleChange('backgroundColor', selected)}
          />

          <Select
            title='ширина контента'
            selected={formState.contentWidth}
            options={contentWidthArr}
            onChange={(selected) => handleChange('contentWidth', selected)}
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
