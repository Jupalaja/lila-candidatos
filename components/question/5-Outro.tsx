// ./components/question/Outro.tsx
import { useState } from 'react';
import { QuestionBoxHeading, QuestionBoxPara, BtnContainer } from '../index';
import { useQuestions } from '@/contexts';
import { postData } from '@/utils';

export function Outro() {
  const { state, dispatch } = useQuestions();
  const [submitting, setSubmitting] = useState(false);

  const handleOnClick = async () => {
    if (submitting) return;
    setSubmitting(true);

    const {
      name,
      caretaker,
      school,
      grade,
      courses,
      days,
      times,
      phone,
      email,
      kind,
      address,
      topic,
    } = state;
    const dataToSend = {
      name,
      caretaker,
      school,
      grade,
      courses,
      days,
      times,
      phone,
      email,
      kind,
      address,
      topic,
    };

    console.log('Sending Data:', dataToSend);

    const success = await postData(dataToSend);

    if (success) {
      dispatch({ type: 'SET_COMPLETE' });
    }

    setSubmitting(false);
  };

  return (
    <>
      <QuestionBoxHeading>
        ¡Gracias por tu interés en Sherpal!
      </QuestionBoxHeading>
      <QuestionBoxPara>
        Acompañanos en la siguiente reunion informativa para que conozcas más en
        este{' '}
        <a href="https://meet.google.com/ptg-tzjh-ong" target="_blank">
          enlace
        </a>{' '}
      </QuestionBoxPara>
      <BtnContainer showPressEnter={true} onClick={handleOnClick}>
        Enviar
      </BtnContainer>
    </>
  );
}
