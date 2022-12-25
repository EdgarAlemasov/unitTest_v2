import Character from '../app'
import { characterSort } from '../app'


test ("create player and get his health status", () => {
    const slayer = new Character("slayer", 60);
    slayer.hit(20);
    expect (slayer.healthStatus()).toEqual("wounded");
})

test ("checking critical health status", () => {
    const stormbringer = new Character("stormbringer", 10);
    expect (stormbringer.healthStatus()).toEqual("critical");
})

test ("checking healthy health status", () => {
    const seeker = new Character("seeker", 90);
    expect (seeker.healthStatus()).toEqual("healthy");
})

test ("checking sort of characters", () => {
    const characters = [new Character("warrior", 10), new Character("archer", 80), new Character("wizard", 100)];
    const sortedList = characterSort(characters);
    expect (characters).toEqual(sortedList);
})