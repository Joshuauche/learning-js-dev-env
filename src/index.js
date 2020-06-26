import './index.css';
import Numeral from 'numeral';

const courseValue = Numeral(1000).format('$0,0.00');

console.log(`i would pay ${courseValue} for this awesome course!`); //eslint-disable-line no-console
