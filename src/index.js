// Array to store all point data
const allData = [];

// Function to detect overlapping points
function detectOverlappingPoints(points) {
    const overlapGroups = {};
    points.forEach((point, index) => {
        const key = `${point.geometry.coordinates[0]},${point.geometry.coordinates[1]}`;
        if (!overlapGroups[key]) {
            overlapGroups[key] = [];
        }
        overlapGroups[key].push(index);
    });
    return overlapGroups;
}

// Function to apply random offset to overlapping points
function applyRandomOffset(points, overlapGroups) {
    const offsetDistance = 0.0001; // Adjust this value as needed
    Object.values(overlapGroups).forEach(group => {
        if (group.length > 1) {
            group.forEach((index, i) => {
                const angle = (i / group.length) * 2 * Math.PI;
                points[index].geometry.coordinates[0] += offsetDistance * Math.cos(angle);
                points[index].geometry.coordinates[1] += offsetDistance * Math.sin(angle);
            });
        }
    });
}

// Function to add point data and handle randomization
function addPointData(longitude, latitude, category, vaccinationLocation, homeZipcode, vaccinationStatus) {
    const pointData = {
        type: 'Feature',
        properties: { category, vaccinationLocation, homeZipcode, vaccinationStatus },
        geometry: { type: 'Point', coordinates: [longitude, latitude] }
    };

    allData.push(pointData);

    // Detect overlapping points and apply random offset
    const overlapGroups = detectOverlappingPoints(allData);
    applyRandomOffset(allData, overlapGroups);
}

// Export the addPointData function and allData array
module.exports = { addPointData, allData };