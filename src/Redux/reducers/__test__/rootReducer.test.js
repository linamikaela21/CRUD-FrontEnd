import {
  POST_PROJECT,
  DELETE_PROJECT,
  SHOW,
  MODAL_SHOW,
  GET_PROJECTS,
} from '../../utils/constants';

import rootReducer from '../rootReducer';

const initialState = {
  projects: [],
  project: {},
  show: false,
  modalShow: false,
};

describe('rootReducer', () => {
  it('should enter in the default case', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  })

  it('should enter in the DELETE_PROJECT case', () => {
    expect(
      rootReducer(undefined, {
        type: DELETE_PROJECT,
        payload: { show: true },
      })
    ).toEqual({
      ...initialState,
      show: true,
    });
  });

  it('should enter in the SHOW case', () => {
    expect(
      rootReducer(undefined, {
        type: SHOW,
        payload: true,
      })
    ).toEqual({
      ...initialState,
      show: true,
    });
  });

  it('should enter in the MODAL_SHOW case', () => {
    expect(
      rootReducer(undefined, {
        type: MODAL_SHOW,
        payload: false,
      })
    ).toEqual({
      ...initialState,
      show: false,
    });
  });
});
