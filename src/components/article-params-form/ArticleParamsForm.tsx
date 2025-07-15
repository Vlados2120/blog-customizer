import clsx from 'clsx';
import { useRef, useState } from 'react';

import { ArrowButton } from 'src/components/ui/arrow-button/ArrowButton';
import { Button } from 'src/components/ui/button';
import { RadioGroup } from 'src/components/ui/radio-group';
import { Text } from 'src/components/ui/text';
import { Separator } from 'src/components/ui/separator';
import { Select } from 'src/components/ui/select';
import { useOutsideClickClose } from 'src/components/ui/select/hooks/useOutsideClickClose';

import {
  OptionType,
  fontFamilyOptions,
  fontSizeOptions,
  fontColors,
  backgroundColors,
  contentWidthArr,
  defaultArticleState,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export interface Options {
  fontFamilyOption: OptionType;
  fontSizeOption: OptionType;
  fontColor: OptionType;
  backgroundColor: OptionType;
  contentWidth: OptionType;
}

interface Props {
  appliedState: Options;
  setAppliedState: React.Dispatch<React.SetStateAction<Options>>;
}

export const ArticleParamsForm = ({ appliedState, setAppliedState }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<Options>(appliedState);

  const asideRef = useRef<HTMLDivElement>(null);

  useOutsideClickClose({
    isOpen,
    onChange: () => setIsOpen(false),
    rootRef: asideRef,
  });

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  function setDefaultOptions() {
    setFormState(defaultArticleState);
    setAppliedState(defaultArticleState);
  }

  function submitForm(evt: React.SyntheticEvent) {
    evt.preventDefault();
    setAppliedState(formState);
  }

  function handleChange(field: keyof Options, selected: OptionType) {
    setFormState((prev) => ({
      ...prev,
      [field]: selected,
    }));
  }

  return (
    <>
      <ArrowButton toggleOpen={toggleOpen} openState={isOpen} />

      <aside
        className={clsx(styles.container, {
          [styles.container_open]: isOpen,
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
