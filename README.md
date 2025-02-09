# maplibre-randomize-overlapping-markers

## Overview

[`maplibre-randomize-overlapping-markers`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fhikou%2Frepos%2Fucla%2Fmaplibre-randomize-overlapping-markers%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A0%2C%22character%22%3A0%7D%5D "README.md") is a module designed to handle the randomization of overlapping markers on a MapLibre map. This helps in improving the visualization of densely packed markers by spreading them out randomly to avoid overlap.

## Features
- Randomizes the position of overlapping markers.
- Easy integration with MapLibre maps.
- Customizable randomization parameters.

## Installation
You can include the module directly in your HTML file using a CDN.

```html
<script src="https://unpkg.com/maplibre-randomize-overlapping-markers/dist/bundle.js"></script>
```

## API

### Class name: PointManager

PointManager.addPointData(longitude, latitude, radius) - Adds a point to the map and returns the new point's coordinates.

### Parameters

- `longitude` - The longitude of the point.
- `latitude` - The latitude of the point.
- `radius` - The radius of the area around the point where other points should not be placed.

| Parameter | Type     | Required | Description                           |
|-----------|----------|----------|---------------------------------------|
| longitude | number   | Yes      | The longitude of the point.           |
| latitude  | number   | Yes      | The latitude of the point.            |
| radius    | number   | No      | The radius of the area around the point where other points should not be placed. Default is 0.01 when it is not set. |


### Example

	PointManager.addPointData(longitude, latitude, 25);


## Usage

> Note: Make sure your `init.js` is a module script otherwise the import will not work.

```html
<script type="module" src="init.js"></script>
```

Here is a simple example of how to use the `maplibre-randomize-overlapping-markers` script in vanilla JavaScript:

```javascript title="init.js"

	[longitude,latitude] = PointManager.addPointData(longitude, latitude, 25);
    new maplibregl.Marker({element:newMarkerElement})
        .setLngLat([longitude, latitude])
        .setPopup(new maplibregl.Popup()
            .setHTML('Hello'))
        .addTo(map)
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MapLibre Randomize Overlapping Markers Example</title>
    <script src="https://cdn.jsdelivr.net/npm/maplibre-gl@1.15.2/dist/maplibre-gl.js"></script>
	<script src="https://unpkg.com/maplibre-randomize-overlapping-markers/dist/bundle.js"></script>


    <style>
        #map {
            width: 100%;
            height: 500px;
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <script>
        // Initialize the map
        const map = new maplibregl.Map({
            container: 'map', // container ID
            style: 'https://demotiles.maplibre.org/style.json', // style URL
            center: [0, 0], // starting position [lng, lat]
            zoom: 2 // starting zoom
        });

        // Add markers to the map
        const markers = [
            new maplibregl.Marker().setLngLat([0, 0]).addTo(map),
            new maplibregl.Marker().setLngLat([0.001, 0.001]).addTo(map),
            new maplibregl.Marker().setLngLat([0.002, 0.002]).addTo(map)
        ];

        // Randomize overlapping markers
        randomizeMarkers(markers);
    </script>
</body>
</html>
```

This example demonstrates how to initialize a MapLibre map, add markers to it, and then use the `randomizeMarkers` function to randomize the positions of overlapping markers.