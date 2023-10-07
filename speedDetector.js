// function speedDetector
function speedDetector (speed) {
    if (speed <= 70) {
        //condition to be fulfilled when speed<= 70
        console.log("Ok");
    } else {
        //other conditions to be fulfilled if speed > 70
        let demeritPoints = (speed - 70)/5;
        //condition for calculating demeritPoints
        if (demeritPoints <= 12) {
            //condition to be fulfilled when demeritPoints <= 12
            console.log(demeritPoints);
        } else {
            //condition to be fulfilled when demeritPoints > 12
            console.log("License suspended");
        }
    }
}

