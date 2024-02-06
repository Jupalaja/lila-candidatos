export const questionsInitialState = {
  name: '',
  caretaker: '',
  school: '',
  grade: '',
  courses: [],
  days: [],
  times: [],
  phone: '',
  email: '',
  kind: '',
  address: '',
  topic: '',
  isComplete: false,
};

export type QuestionsStateType = {
  name: string;
  caretaker: string;
  school: string;
  grade: string;
  courses: string[];
  days: string[];
  times: string[];
  phone: string;
  email: string;
  kind: string;
  address: string;
  topic: string;
  isComplete: boolean;
};
