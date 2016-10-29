export async function fetchRepos(user) {
  try {
    return await fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => response.json());
  } catch (error) {
    console.error(error);
  }
};
