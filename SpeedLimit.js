// speed limit = 70
// speed limit 70 or lower, return OK
// every 5 kph higher get 1 point
// Math.floor()
// More than 12 points license is suspended

const ticket = checkSpeed(210);
console.log(ticket);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoints = 5;

    if (speed <= speedLimit + 4) return 'OK';
    let highSpeed = (speed - speedLimit);
    let pointsTemp = (highSpeed / kmPerPoints)
    let points = (Math.floor(pointsTemp));
    if (points >= 12) return 'Your License is suspended';
    // return highSpeed;
    return (points);
 
}
