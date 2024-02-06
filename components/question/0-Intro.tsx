import { useSharedStates } from '@/contexts';
import { BtnContainer, QuestionBoxHeading, QuestionBoxPara } from '../index';

export function Intro() {
  const { handleOkClick } = useSharedStates();

  return (
    <>
      <QuestionBoxHeading>¡Hola!</QuestionBoxHeading>
      <QuestionBoxPara>
        Llena el siguiente formulario para que podamos ponernos en contacto
        contigo
        <br />
      </QuestionBoxPara>

      <BtnContainer showPressEnter={true} onClick={handleOkClick}>
        Comenzar
      </BtnContainer>
    </>
  );
}
