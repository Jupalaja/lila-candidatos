export const SET_NAME = 'SET_NAME';
export const SET_CARETAKER = 'SET_CARETAKER';
export const SET_SCHOOL = 'SET_SCHOOL';
export const SET_GRADE = 'SET_GRADE';
export const SET_COURSES = 'SET_COURSES';
export const REMOVE_COURSE = 'REMOVE_COURSE';
export const SET_DAYS = 'SET_DAYS';
export const REMOVE_DAY = 'REMOVE_DAY';
export const SET_TIMES = 'SET_TIMES';
export const REMOVE_TIME = 'REMOVE_TIME';
export const SET_PHONE = 'SET_PHONE';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_KIND = 'SET_KIND';
export const SET_ADDRESS = 'SET_ADDRESS';
export const SET_TOPIC = 'SET_TOPIC';
export const SET_COMPLETE = 'SET_COMPLETE';

export type QuestionsActionsType =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_CARETAKER'; payload: string }
  | { type: 'SET_SCHOOL'; payload: string }
  | { type: 'SET_GRADE'; payload: string }
  | { type: 'SET_COURSES'; payload: string }
  | { type: 'REMOVE_COURSE'; payload: string }
  | { type: 'SET_DAYS'; payload: string }
  | { type: 'REMOVE_DAY'; payload: string }
  | { type: 'SET_TIMES'; payload: string }
  | { type: 'REMOVE_TIME'; payload: string }
  | { type: 'SET_PHONE'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_ADDRESS'; payload: string }
  | { type: 'SET_KIND'; payload: string }
  | { type: 'SET_TOPIC'; payload: string }
  | { type: 'SET_COMPLETE' };
