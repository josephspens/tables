export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const REJECT_REPOS = 'REJECT_REPOS';

export const requestRepos = (user) => ({ type: REQUEST_REPOS, user });
export const recieveRepos = (repos) => ({ type: RECEIVE_REPOS, repos });
export const rejectRepos = (error) => ({ type: REJECT_REPOS, error });
