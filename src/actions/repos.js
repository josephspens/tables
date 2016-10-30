export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const REJECT_REPOS = 'REJECT_REPOS';

export const requestRepos = (user, options) => ({ type: REQUEST_REPOS, user, options });
export const recieveRepos = (repos, links) => ({ type: RECEIVE_REPOS, repos, links });
export const rejectRepos = (error) => ({ type: REJECT_REPOS, error });
