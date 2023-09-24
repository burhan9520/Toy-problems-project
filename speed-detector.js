// Function to detect speed violations and calculate demerit pointsfunction speedDetector(carSpeed) {
    function speedDetector(carSpeed) {
        // Define the speed limit and constants
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

      // To see if the  speed is within the speed limit
    if (carSpeed <= speedLimit) {
        console.log("Ok"); // Print "Ok" if its within the limit
    } else {
        const demeritPoints = Math.floor((carSpeed - speedLimit) / kmPerDemeritPoint);

           // Check if the demerit points are within the allowable limit
        if (demeritPoints <= maxDemeritPoints) {
            console.log(`Points: ${demeritPoints}`);
        } else {
            console.log("License suspended"); // If its more than 12 points, print "License suspended"
        }
    }
}


speedDetector(120); // Call the speedDetector function

