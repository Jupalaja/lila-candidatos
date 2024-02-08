import { useQuestions, useSharedStates } from '@/contexts';
import { useEffect } from 'react';
import { isNotValidEmail } from '@/utils';

export function useHandleKeypress() {
  const { questionNum, setErrorMsg, handleQuestionNumUpdate } =
    useSharedStates();

  const { now } = questionNum;
  const { state } = useQuestions();
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
    topic,
  } = state;

  useEffect(() => {
    function handleKeypress(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        event.preventDefault();

        if (now + 1 === 2 && name === '') {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            name: 'Este campo es obligatorio',
          }));
          return;
        } else if (now + 1 === 3 && phone === '') {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            name: 'Este campo es obligatorio',
          }));
          return;
        } else if (now + 1 === 4 && school === '') {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            school: 'Este campo es obligatorio',
          }));
          return;
        } else if (now + 1 === 5 && email === '') {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            email: 'Por favor ingresa tu email',
          }));
          return;
        } else if (now + 1 === 5 && email && isNotValidEmail(email)) {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            email: 'Hmm... el Email no parece válido',
          }));
          return;
        } else if (now + 1 === 6 && topic === '') {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            topic: 'Este campo es obligatorio',
          }));
          return;
        }
        handleQuestionNumUpdate();
      }
    }

    document.addEventListener('keypress', handleKeypress);

    return function () {
      document.removeEventListener('keypress', handleKeypress);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    name,
    caretaker,
    school,
    days,
    times,
    phone,
    email,
    now,
    grade,
    courses,
    topic,
  ]);
}
