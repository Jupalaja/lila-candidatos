import { QuestionProps } from '@/types';
import classNames from 'classnames';
import {
  NameInput,
  SchoolInput,
  Intro,
  PhoneInput,
  Outro,
  EmailInput,
  TopicInput,
} from './index';
import styles from './Question.module.css';

export function Question({
  inView,
  inViewSlide,
  outView,
  outViewSlide,
  isRendered,
  type,
}: QuestionProps) {
  return (
    <div
      className={classNames(styles['question-box'], {
        [styles['slide-out']]: outView,
        [styles['slide-in']]: inView,
        [styles['out-view__up']]: outViewSlide === 'up',
        [styles['out-view__down']]: outViewSlide === 'down',
        [styles['in-view__up']]: inViewSlide === 'up',
        [styles['in-view__down']]: inViewSlide === 'down',
        [styles['rendered']]: isRendered,
      })}
    >
      {type === 'intro' && <Intro />}
      {type === 'name' && <NameInput />}
      {type === 'phone' && <PhoneInput />}
      {type === 'school' && <SchoolInput />}
      {type === 'email' && <EmailInput />}
      {type === 'topic' && <TopicInput />}
      {type == 'outro' && <Outro />}
    </div>
  );
}
