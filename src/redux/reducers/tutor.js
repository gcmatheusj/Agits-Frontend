import { createReducer } from 'reduxsauce';
import { Types } from '../actions/tutor';

export const INITIAL_STATE = {
  knowledgetcs: false,
  syllabus: false,
  isFetching: false,
  error: false,
};

export const knowledgeTCS = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    knowledgetcs: !state.knowledgetcs,
  };
};
export const syllabus = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    syllabus: !state.syllabus,
  };
};

export const HANDLERS = {
  [Types.KNOWLEDGETCS]: knowledgeTCS,
  [Types.SYLLABUS]: syllabus,
};

export default createReducer(INITIAL_STATE, HANDLERS);
