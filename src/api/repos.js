export const parameterMap = {
  start: 'page',
  limit: 'per_page'
};

export const mapOptionsToParams = (options) => {
  return Object
    .keys(options)
    .map(key => `${parameterMap[key]}=${options[key]}`)
    .join('&');
};

export const getLinkHeaders = (response) => {
  const linkHeader = response.headers.get('link');
  const links = linkHeader ? linkHeader.split(', ') : [];
  return links.reduce((memo, link) => {
    const url = link.match(/<(.*)>/i)[1];
    const rel = link.match(/rel="(.*)"/i)[1];
    memo[rel] = url;
    return memo;
  }, {});
};

export const receiveRepos = (response) => {
  const pagination = getLinkHeaders(response);
  return response.json().then(items => ({ items, pagination }));
};

export const rejectRepos = (response) => response.json().then(({ message }) => message);

export async function fetchRepos(user, options) {
  const url = typeof options === 'string' ? options : `https://api.github.com/users/${user}/repos?${mapOptionsToParams(options)}`;
  try {
    return await fetch(url).then(receiveRepos, rejectRepos);
  } catch (error) {
    console.error(error);
  }
};
