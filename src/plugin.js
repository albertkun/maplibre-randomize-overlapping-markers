import { getRandomNumber } from './randomizer.js';

export function initializePlugin(map) {
    map.on('load', () => {
        console.log('Map loaded. Random number:', getRandomNumber());
    });
}