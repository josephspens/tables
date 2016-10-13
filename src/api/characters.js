const fetchResponse = {
  items: [
    {
      firstName: 'Tyrion',
      lastName: 'Lannister',
      gender: 'male',
      isAlive: 'true'
    },
    {
      firstName: 'Cersei',
      lastName: 'Lannister',
      gender: 'female',
      isAlive: 'true'
    },
    {
      firstName: 'Jon',
      lastName: 'Snow',
      gender: 'male',
      isAlive: 'true'
    },
    {
      firstName: 'Tywin',
      lastName: 'Lannister',
      gender: 'male',
      isAlive: 'false'
    },
    {
      firstName: 'Catelyn',
      lastName: 'Stark',
      gender: 'female',
      isAlive: 'false'
    }
  ]
}

export async function fetchCharacters(room) {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    return fetchResponse;
  } catch(error) {
    console.error(error);
  }
};
