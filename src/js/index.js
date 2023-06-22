import '../styles/index.scss';
import './user-controller/user-controller-events.js';
import leadorboardIcon from '../assets/media/leaderboard-icon.png';
import gameId from './services/gameId.js';

document.getElementById('logo').src = leadorboardIcon;

if (window.localStorage.length <= 0) {
  await gameId();
}
