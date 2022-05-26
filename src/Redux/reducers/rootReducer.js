import {
  POST_PROJECT,
  DELETE_PROJECT,
  SHOW,
  GET_PROJECT_BY_ID,
  MODAL_SHOW,
  GET_PROJECTS,
} from '../utils/constants';

const initialState = {
  projects: [],
  project: {},
  show: false,
  modalShow: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: state.projects,
        project: action.payload.project,
      };
    case GET_PROJECT_BY_ID:
      return {
        ...state,
        project: state.projects?.find(
          (proj) => Object.values(proj)[0] === action.payload
        ),
      };
    case POST_PROJECT:
      return {
        ...state,
        show: action.payload.show,
        projects: action.payload.projects,
        project: {},
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (proj) => Object.values(proj)[0] !== action.payload.projId
        ),
        show: action.payload.show,
      };
    case SHOW:
      return {
        ...state,
        show: action.payload,
      };
    case MODAL_SHOW:
      return {
        ...state,
        modalShow: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
