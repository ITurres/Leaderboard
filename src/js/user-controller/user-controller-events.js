import UserServices from '../services/userServices.js';
import injectScoresOnDOM from '../markup-injectors/injectScoresOnDOM.js';
import domMessageOptions from '../utils/DOM/DOMmessage.js';

import gameId from '../services/gameId.js';

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

    domMessageOptions.renderMessage(userScore, 'A new Score has been added.');
    domMessageOptions.clearMessage(userScore);
  });

document
  .querySelector('[data-get-all-scores]')
  .addEventListener('click', async () => {
    // ? this block is the same as the one in src/js/index.js
    // * this double check is in case the user has deleted the gameId from localStorage.
    if (!localStorage.getItem('gameId')) {
      await gameId();
    }

    const scoresHolder = document.querySelector('[data-scores-holder]');
    scoresHolder.innerHTML = '';

    const userServices = new UserServices();
    const scores = await userServices.getAllScores();

    injectScoresOnDOM(scoresHolder, scores);
  });
