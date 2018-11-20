import { createActions } from 'reduxsauce';

export const {
  Types,
  Creators,
} = createActions({
  knowledgetcs: null,
  syllabus: null,
  quicktest: null,
  customtest: null,
  placementtest: null,
  studentsreports: null,
  teacherreports: null,

  createtutorRequest: ['tutor'],
});

export default Creators;
