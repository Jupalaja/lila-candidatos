import { SET_TOPIC } from '@/reducers';
import { ChangeEventHandler } from 'react';
import {
  BtnContainer,
  Error,
  QuestionNumHeading,
  QuestionInputText,
} from '../index';
import classNames from 'classnames';
import styles from './Question.module.css';
import Image from 'next/image';
import { useQuestions, useSharedStates } from '@/contexts';

export function TopicInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.topic ?? '';
  const { topic, name } = state;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    errorMsg &&
      setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.topic;
        return prevValue;
      });

    dispatch({ type: SET_TOPIC, payload: event.target.value });
  };

  return (
    <>
      <QuestionNumHeading questionNum={5}>
        ¿Que carrera estudias o estudiaste, {name.split(' ')[0]}?
      </QuestionNumHeading>
      <QuestionInputText
        placeholder="Carrera.."
        value={topic}
        onChange={handleInputChange}
      />

      {errorMsg && <Error message={errorMsg} />}

      {errorMsg === '' && (
        <BtnContainer
          className={classNames(styles['btn-container'], styles['ok'])}
          showPressEnter={true}
          onClick={handleOkClick}
        >
          Confirmar{' '}
          <Image
            src="/check-small.svg"
            alt="check small"
            width={34}
            height={34}
          />
        </BtnContainer>
      )}
    </>
  );
}
