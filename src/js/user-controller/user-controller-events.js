import UserServices from '../services/userServices.js';
import injectScoresOnDOM from '../markup-injectors/injectScoresOnDOM.js';

document
  .querySelector('[data-submit-new-score]')
  .addEventListener('click', async () => {
    const userName = document.querySelector('input[name="name"]');
    const userScore = document.querySelector('input[name="score"]');

    if (!userName.value && !userScore.value) {
      return;
    }
    const userServices = new UserServices();
    await userServices.addScore({
      user: userName.value,
      score: userScore.value
    });

    userName.value = '';
    userScore.value = '';
  });

document
  .querySelector('[data-get-all-scores]')
  .addEventListener('click', async () => {
    const scoresHolder = document.querySelector('[data-scores-holder]');
    scoresHolder.innerHTML = '';
    const userServices = new UserServices();
    const scores = await userServices.getAllScores();
    injectScoresOnDOM(scoresHolder, scores);
  });
