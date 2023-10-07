// function of studentGradeGenerator
function studentGradeGenerator (studentMarks) {
    //conditions of marks to grades
    if (studentMarks >= 79 && studentMarks <= 100){
        //condition to be fulfilled if studentMarks are from 80 to 100
        console.log("A");
    } else {
        if (studentMarks > 59 && studentMarks < 80){
            //condition to be fulfilled for studentMarks from 60 to 79
            console.log("B");
        } else{
            if (studentMarks > 48 && studentMarks < 60){
                //condition to be fulfilled for studentMarks from 49 to 59
                console.log("C");
            } else {
                if (studentMarks > 39 && studentMarks < 50){
                    //condition to be fulfilled for studentMarks from 40 to 49
                    console.log("D");
                } else {
                    if (studentMarks < 40){
                        //condition to be fulfilled for studentMarks below 40 to 0
                        console.log("E");
                    } else {
                        //default condition if the input is not a number or it does not range from 0 to 100
                        console.log("input student marks");
                    }
                }
            }
        }
    }
}
