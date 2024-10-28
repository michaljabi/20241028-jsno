// import { Car, myNumber } from './Car.mjs';
import Carzz, { myNumber as numAlias } from './Car.mjs';

const car1 = new Carzz()
const car2 = new Carzz('Bugatti', 'Veyron')

car1.makeSomeNoise()
car2.makeSomeNoise()

console.log(numAlias);
