import {
  QuestionsActionsType,
  QuestionsStateType,
  SET_NAME,
  SET_CARETAKER,
  SET_SCHOOL,
  SET_GRADE,
  SET_COURSES,
  REMOVE_COURSE,
  SET_DAYS,
  REMOVE_DAY,
  SET_TIMES,
  REMOVE_TIME,
  SET_PHONE,
  SET_EMAIL,
  SET_KIND,
  SET_TOPIC,
  SET_COMPLETE,
  SET_ADDRESS,
} from '../index';

export function questionsReducerFunc(
  state: QuestionsStateType,
  action: QuestionsActionsType
) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };

    case SET_CARETAKER:
      return { ...state, caretaker: action.payload };

    case SET_SCHOOL:
      return { ...state, school: action.payload };

    case SET_GRADE:
      return { ...state, grade: action.payload };

    case SET_COURSES:
      return { ...state, courses: [...state.courses, action.payload] };

    case REMOVE_COURSE:
      return {
        ...state,
        courses: state.courses.filter((course) => course !== action.payload),
      };

    case SET_DAYS:
      return { ...state, days: [...state.days, action.payload] };

    case REMOVE_DAY:
      return {
        ...state,
        days: state.days.filter((day) => day !== action.payload),
      };

    case SET_TIMES:
      return { ...state, times: [...state.times, action.payload] };

    case REMOVE_TIME:
      return {
        ...state,
        times: state.times.filter((time) => time !== action.payload),
      };

    case SET_PHONE:
      return { ...state, phone: action.payload };

    case SET_EMAIL:
      return { ...state, email: action.payload };

    case SET_KIND:
      return { ...state, kind: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    case SET_TOPIC:
      return { ...state, topic: action.payload };

    case SET_COMPLETE:
      return { ...state, isComplete: true };

    default:
      return state;
  }
}
