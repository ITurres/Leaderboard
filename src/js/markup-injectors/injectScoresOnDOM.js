import createTableScoreRows from '../markup-templates/createTableScoreRows.js';

const injectScoresOnDOM = (holder, scores) => {
  scores.forEach((result) => {
    holder.innerHTML += createTableScoreRows(result);
  });
};

export default injectScoresOnDOM;
