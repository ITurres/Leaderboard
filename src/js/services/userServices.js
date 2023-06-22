class UserServices {
  constructor() {
    this.gameId = 'Tj39OXAwLBgNoIxJUgqU';
  }

  async addScore(data) {
    try {
      await fetch(
        `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameId}/scores/`,
        {
          method: 'POST',
          body: JSON.stringify({
            user: data.user,
            score: data.score
          }),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        }
      );
    } catch (error) {
      console.error(
        `There was an error adding the given score, error => ${error}`
      );
      throw new Error(error);
    }
  }

  async getAllScores() {
    try {
      const scores = await fetch(
        `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameId}/scores/`
      );

      if (!scores.ok) {
        throw new Error('Failed to fetch scores');
      }

      const responseData = await scores.json();

      return responseData.result;
    } catch (error) {
      console.error(
        `There was an error fetching scores data, error => ${error}`
      );
      throw new Error(error);
    }
  }
}

export default UserServices;
