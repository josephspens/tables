export const CHARACTERS_FETCH_REQUESTED = 'CHARACTERS_FETCH_REQUESTED';
export const CHARACTERS_FETCH_SUCCEEDED = 'CHARACTERS_FETCH_SUCCEEDED';
export const CHARACTERS_FETCH_FAILED = 'CHARACTERS_FETCH_FAILED';

export const requestCharacters = () => {
  return {
    type: CHARACTERS_FETCH_REQUESTED,
    data: {}
  };
};

export const recieveCharacters = (data) => {
  return {
    type: CHARACTERS_FETCH_SUCCEEDED,
    data
  };
};

export const failCharacters = (message) => {
  return {
    type: CHARACTERS_FETCH_FAILED,
    data: { message }
  };
};
