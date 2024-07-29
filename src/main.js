import { initializePlugin } from './plugin.js';

maplibregl.accessToken = 'YOUR_MAPLIBRE_ACCESS_TOKEN';
const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [0, 0],
    zoom: 2
});

initializePlugin(map);