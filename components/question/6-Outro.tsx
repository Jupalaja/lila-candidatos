import { useState } from 'react';
import { QuestionBoxHeading, QuestionBoxPara, BtnContainer } from '../index';
import { useQuestions } from '@/contexts';
import { postData } from '@/utils';
import styles from './Question.module.css';

export function Outro() {
  const { state, dispatch } = useQuestions();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOnClick = async () => {
    if (submitting) return;
    setSubmitting(true);

    const { name, phone, school, topic, email } = state;
    const dataToSend = {
      name,
      phone,
      school,
      email,
      topic,
    };

    console.log('Sending Data:', dataToSend);

    const success = await postData(dataToSend);

    if (success) {
      setSubmitted(true);
      setSuccess(true);
      dispatch({ type: 'SET_COMPLETE' });
    }

    setSubmitting(false);
  };

  const title = success
    ? '¡Gracias por tu interés en Sherpal!'
    : 'Haz click en el botón para enviar tus datos.';
  return (
    <>
      <QuestionBoxHeading>{title}</QuestionBoxHeading>
      {success && (
        <QuestionBoxPara className={submitted ? styles.rendered : ''}>
          <br />
          Acompáñanos a nuestra reunión informativa el Jueves a las 6:00 pm en
          el siguiente{' '}
          <a href=" https://meet.google.com/ptg-tzjh-ong" target="_blank">
            enlace
          </a>
          . Siguenos en{' '}
          <a href="https://www.instagram.com/wearesherpal/" target="_blank">
            instagram
          </a>{' '}
          para enterarte de más eventos y noticias.
        </QuestionBoxPara>
      )}
      <BtnContainer
        showPressEnter={false}
        onClick={handleOnClick}
        className={`${
          submitting || submitted ? styles.successfulSubmission : ''
        } ${submitting ? styles.btnLoading : ''}`}
      >
        {submitting ? 'Cargando...' : submitted ? 'Enviado' : 'Enviar'}
      </BtnContainer>
    </>
  );
}
