import { createReducer } from 'reduxsauce'
import { Types } from '../actions/tutor'

export const INITIAL_STATE = {
  knowledgetcs: false,
  syllabus: false,
  quickTest: false,
  customTest: false,
  placementTest: false,
  studentsReports: false,
  teacherReports: false,
}

export const knowledgeTCS = (state = INITIAL_STATE, action) => ({
  ...state,
  knowledgetcs: !state.knowledgetcs,
});
export const syllabus = (state = INITIAL_STATE, action) => ({
  ...state,
  syllabus: !state.syllabus,
});
export const quickTest = (state = INITIAL_STATE, action) => ({
  ...state,
  quickTest: !state.quickTest,
});
export const customTest = (state = INITIAL_STATE, action) => ({
  ...state,
  customTest: !state.customTest,
});
export const placementTest = (state = INITIAL_STATE, action) => ({
  ...state,
  placementTest: !state.placementTest,
});
export const studentsReports = (state = INITIAL_STATE, action) => ({
  ...state,
  studentsReports: !state.studentsReports,
});
export const teacherReports = (state = INITIAL_STATE, action) => ({
  ...state,
  teacherReports: !state.teacherReports,
});
export const createtutorRequest = (state = INITIAL_STATE, action) => ({
  ...state,
});

export const HANDLERS = {
  [Types.KNOWLEDGETCS]: knowledgeTCS,
  [Types.SYLLABUS]: syllabus,
  [Types.QUICKTEST]: quickTest,
  [Types.CUSTOMTEST]: customTest,
  [Types.PLACEMENTTEST]: placementTest,
  [Types.STUDENTSREPORTS]: studentsReports,
  [Types.TEACHERREPORTS]: teacherReports,

  [Types.CREATETUTOR_REQUEST]: createtutorRequest,
}

export default createReducer(INITIAL_STATE, HANDLERS)
