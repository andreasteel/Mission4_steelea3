//function to get the results
$("#results").click(function () {
   // getting grade percent
    iGrade = ($("#assignments").val() * .5) +
        ($("#groupprojects").val() * .1) +
        ($("#quizzes").val() * .1) +
        ($("#midterm").val() * .1) +
        ($("#final").val() * .1) +
        ($("#intex").val() * .1)
    iGrade = iGrade.toFixed(2);

    //getting grade
    if (iGrade >= 94) {
        iLetterGrade = 'A';
    }
    else if (iGrade >= 90) {
        iLetterGrade = 'A-';
    }
    else if (iGrade >= 87) {
        iLetterGrade = 'B+';
    }
    else if (iGrade >= 84) {
        iLetterGrade = 'B';
    }
    else if (iGrade >= 80) {
        iLetterGrade = 'B-'
    }
    else if (iGrade >= 77) {
        iLetterGrade = 'C+';
    }
    else if (iGrade >= 74) {
        iLetterGrade = 'C';
    }
    else if (iGrade >= 70) {
        iLetterGrade = 'C-';
    }
    else if (iGrade >= 67) {
        iLetterGrade = 'D+';
    }
    else if (iGrade >= 64) {
        iLetterGrade = 'D';
    }
    else if (iGrade >= 60) {
        iLetterGrade = 'D-';
    }
    else if (iGrade >= 60) {
        iLetterGrade = 'E';
    }
    else {
        iLetterGrade = 'None'
    }

    $('#finalGrade').show()
    $("#finalGrade").html('<b>Grade: </b>' + iGrade + '%' + '<br>' + '<b>Letter Grade: </b>' + iLetterGrade)
    $("#reload").show()

})