// TODO: write your code here
import { nextTick } from 'process';
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default class Character {
    constructor (name, health) {
      this.name = name,
      this.health = health
    }
  
    hit (damage) {
      this.health -= damage
    }
  
    healthStatus () {
      let status = null;
      if (this.health > 50) {
        status = "healthy";
      } else if (this.health > 15 && this.health < 50) {
        status = "wounded";
      } else {
        status = "critical";
      }
      return status;
    }
  }


const wizard = new Character("wizard", 100);
const warrior = new Character("warrior", 10);
const archer = new Character("archer", 80);

const charactersList = [wizard, warrior, archer];


export function characterSort (characters) {
    return characters.sort((next, prev) => prev.health - next.health);
}