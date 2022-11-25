export const SEND_USER_INFOS = 'SEND_USER_INFOS';
export const PLAYER_SCORE = 'PLAYER_SCORE';
export const PLAYER_ASSERTIONS = 'PLAYERS_ASSERTIONS';
export const RESET_GLOBAL_STATE = 'RESET_GLOBAL_STATE';
export const GET_PLAYER_IMAGE = 'GET_PLAYER_IMAGE';

// userActions
export const sendUserInfos = (payload) => ({
  type: SEND_USER_INFOS,
  payload,
});

// gameActions

export const playerScore = (score) => ({
  type: PLAYER_SCORE,
  payload: score,
});

export const playerAssertions = (payload) => ({
  type: PLAYER_ASSERTIONS,
  payload,
});

export const resetGlobalState = () => ({
  type: RESET_GLOBAL_STATE,
});

export const getPlayerImage = (src) => ({
  type: GET_PLAYER_IMAGE,
  payload: src,
});

// settings categories;

export const SELECTED_CATEGORY = 'SELECTED_CATEGORY';
export const selectedCategory = (payload) => ({
  type: SELECTED_CATEGORY,
  payload,
});

export const SELECTED_DIFFICULTY = 'SELECTED_DIFFICULTY';
export const selectedDifficulty = (payload) => ({
  type: SELECTED_DIFFICULTY,
  payload,
});

export const SELECTED_TYPE = 'SELECTED_TYPE';
export const selectedType = (payload) => ({
  type: SELECTED_TYPE,
  payload,
});
