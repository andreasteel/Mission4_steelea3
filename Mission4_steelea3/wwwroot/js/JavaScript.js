$("#results").click(function () {
    //alert("from: " + $("#txtfrom").val() +
    //    "subject:" + $("#txtsubject").val());
    iLetterGrade = '';
    iGrade = $("#assignments").val() + $("#groupproject").val() + $("#quizzes").val() + $("#midterm").val() + $("#final").val() + $("#intex").val();
    if (iGrade >= 94) {
        iLetterGrade = 'A'
    }
    else if (iGrade >= 90) {
        iLetterGrade = 'A-'
    }
    else if (iGrade >= 87) {
        iLetterGrade = 'B+'
    }
    else if (iGrade >= 84) {
        iLetterGrade = 'B'
    }
    else if (iGrade >= 80) {
        iLetterGrade = 'B-'
    }
    else if (iGrade >= 77) {
        iLetterGrade = 'C+'
    }
    else if (iGrade >= 74) {
        iLetterGrade = 'C'
    }
    else if (iGrade >= 70) {
        iLetterGrade = 'C-'
    }
    else if (iGrade >= 67) {
        iLetterGrade = 'D+'
    }
    else if (iGrade >= 64) {
        iLetterGrade = 'D'
    }
    else if (iGrade >= 60) {
        iLetterGrade = 'D-'
    }
    else if (iGrade >= 60) {
        iLetterGrade = 'E'
    }
    else {
        iLetterGrade = 'None'
    }

    console.log(iLetterGrade)
})