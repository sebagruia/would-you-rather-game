import { RECEIVE_USERS } from "../actions/receiveUsersAction";
import { ADD_QUESTION_TO_USER } from "../actions/addQuestionToUserAction";
import { SAVE_ANSWER } from "../actions/saveAnswerAction";

const initialStateUsers = {
  users: {},
};

export const usersReducer = (state = initialStateUsers, action = {}) => {
  
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, users: action.payload };
    case ADD_QUESTION_TO_USER:
      const formattedQuestion = action.payload;
      return {
        ...state,
        users: {
          ...state.users,
          [formattedQuestion.author]: {
            ...state.users[formattedQuestion.author],
            questions: state.users[formattedQuestion.author].questions.concat([
              formattedQuestion.id,
            ]),
          },
        },
      };
    case SAVE_ANSWER:
      const authedUser = action.payload.authedUser;
      const qid = action.payload.qid;
      return {
        ...state,
        users: {
          ...state.users,
          [authedUser]: {
            ...state.users[authedUser],
            answers: {
              ...state.users[authedUser].answers,
              [qid]: action.payload.answer,
            },
          },
        },
      };

    default:
      return state;
  }
};
