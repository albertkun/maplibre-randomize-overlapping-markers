(function(global) {
    // Array to store all point data
    const allData = [];

    // Function to detect if a point overlaps with existing points
    function isOverlapping(point, points) {
        return points.some(existingPoint => {
            return existingPoint.geometry.coordinates[0] === point.geometry.coordinates[0] &&
                   existingPoint.geometry.coordinates[1] === point.geometry.coordinates[1];
        });
    }

    // Function to apply random offset to a point
    function applyRandomOffset(point, offsetMultiplier) {
        const offsetDistance = 0.0001 * offsetMultiplier; // Adjust this value as needed
        const angle = Math.random() * 2 * Math.PI;
        point.geometry.coordinates[0] = parseFloat(point.geometry.coordinates[0]) + offsetDistance * Math.cos(angle);
        point.geometry.coordinates[1] = parseFloat(point.geometry.coordinates[1]) + offsetDistance * Math.sin(angle);
    }

    // Function to add point data and handle randomization
    function addPointData(longitude, latitude, offsetMultiplier = 1) {
        const pointData = {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [parseFloat(longitude), parseFloat(latitude)] }
        };

        // Check for overlapping and apply offset if necessary
        while (isOverlapping(pointData, allData)) {
            applyRandomOffset(pointData, offsetMultiplier);
        }

        allData.push(pointData);

        // Return the modified coordinates
        return pointData.geometry.coordinates;
    }

    // Expose the functions and data to the global scope
    global.PointManager = {
        addPointData,
        allData
    };

    // Export for module systems
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = global.PointManager;
    }

})(typeof window !== 'undefined' ? window : global);