const gameId = async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          name: 'Scorify'
        })
      }
    );

    if (!response.ok) {
      throw new Error('Failed to create a new game.');
    }

    const newGameResult = await response.json();

    // ? removes 'Game with ID: added.'
    const newGameId = newGameResult.result
      .split(': ')[1]
      .replace(' added.', '');

    localStorage.setItem('gameId', JSON.parse(newGameId));
  } catch (error) {
    throw new Error(`Failed to create a new game. Error => ${error}`);
  }
};

export default gameId;
