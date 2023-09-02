let malaysiaSchools = [
    {
        schoolid: 10000,
        name: 'Cheng',
        phone: '+6018-3410502',
        email: 'samanghorban@gmail.com',
        country: 'Iran',
        language: 'Farsi',
        classes: [
            {
                name: "Period1",
                teacher: "Bob",
                floor: "Third",
                students: []
            },
            {
                name: "Period2",
                teacher: "Jason",
                floor: "Second",
                students: [
                    {
                        id: 2000,
                        firstName: "Jack",
                        lastName: "Robbin",
                        gender: "male",
                        age: 31,
                        email: "jachrobiin@hotmail.com"
                    }
                ]
            }
        ]
      }
];

// We add a new school via the following function. 
function addNewSchool (schoolName, phone, email, country, language) {
    let checkCondition = schoolName && phone && email && country && language;
    if(checkCondition && malaysiaSchools.length > 0){
        if(malaysiaSchools.find(element => element.name === schoolName)){
            return "A school with this name already exists."
        }
        else{
            let newSchoolIdNumber = malaysiaSchools[malaysiaSchools.length -1 ].schoolid + 1
            let newSchool = {
                schoolid: newSchoolIdNumber,
                name: schoolName,
                phone: phone,
                email: email,
                country: country,
                language: language,
                classes: []
            }
            malaysiaSchools.push(newSchool)
            return "The school has been added successfully."
        }
    }
    else if (checkCondition && malaysiaSchools.length === 0){
        let newSchoolIdNumber = 10000
        let newSchool = {
            schoolid: newSchoolIdNumber,
            name: schoolName,
            phone: phone,
            email: email,
            country: country,
            language: language,
            classes: []
        }
        malaysiaSchools.push(newSchool)
        return "The school has been added successfully."
    }
    else{
        return "Make sure you have filled the forms out carefully"
    }
}

// We can find the number of the school's index via the following function.
function schoolIndexFinder (schoolName){
    if(schoolName){
        for (let i = 0; i < malaysiaSchools.length ; i++){
            if(malaysiaSchools[i].name === schoolName){
                return i //Here we return the school's index number.
            }
            else {
                return "There is no such a school name."
            }
        }
    }else {
        return "Make sure you put your school name."
    }
}

// We can find the number of the class's index via the following function.
function classIndexFinder (schoolName, className){
    if(schoolName && className){
        let schoolIndex = schoolIndexFinder(schoolName);
        if(typeof schoolIndex === 'number'){
            for(let i = 0; i < malaysiaSchools[schoolIndex].classes.length ; i++){
                if(malaysiaSchools[schoolIndex].classes[i].name === className){
                    return i
                }
            }
        }else{
            return "There is no such a school name."
        }
    }else {
        return "Make sure you have filled the forms out carefully."
    }     
    return "There is no such a class name."   
}

// We can add a new class into a specific school. 
function addNewClassToSchool (schoolName, className , teacherName, floor) {
    if(schoolName && className && teacherName && floor){
        let schoolIndex = schoolIndexFinder(schoolName);
        if(typeof schoolIndex === 'number'){
            let newClass = {
                name: className,
                teacher: teacherName,
                floor: floor,
                students: []
            }
            malaysiaSchools[schoolIndex].classes.push(newClass)
            return "The class has been added successfully."
        }
        else{
            return "There is no such a school name."
        }
    }
    else{
        return "Make sure you have filled the forms out carefully"
    }
}

// We can find the student Id via the following function. 
function studentIdFinder (schoolName, className){
    if (schoolName && className) {
        let schoolIndex = schoolIndexFinder(schoolName);
        let classIndex = classIndexFinder(schoolName , className);
        if (typeof schoolIndex && typeof classIndex === 'number'){
            if(malaysiaSchools[schoolIndex].classes[classIndex].students.length > 0){
                let studentId = malaysiaSchools[schoolIndex].classes[classIndex].students[malaysiaSchools[schoolIndex].classes[classIndex].students.length - 1].id
                return studentId
            }else {
                return 1999;
            }
        }else {
            return "There is no such a school or class name."
        }
    }else{
        return "Make sure you have filled the forms out carefully"
    } 
}


// We can a new student into a sprcific class.
function addNewStudentToClass (schoolName , className , firstName, lastName, gender, age , email) {
    if(schoolName && className && firstName && lastName && gender && age && email){
        let schoolIndex = schoolIndexFinder(schoolName)
        let classIndex = classIndexFinder(schoolName , className)
        if(typeof schoolIndex && typeof classIndex === 'number'){
            let newStudent = {
                id: studentIdFinder(schoolName, className) + 1,
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                age: age,
                email: email
            }
            malaysiaSchools[schoolIndex].classes[classIndex].students.push(newStudent)
            return "The student has been added successfully."
        }else {
            return "Either the school is not exist or class."
        }
    }else {
        return "Make sure you have filled the forms out carefully"
    }
    
}

console.log(addNewStudentToClass("Cheng" , "Period1", "David", "Green" , "Male", 30,  "dvdgrn@hotmail.com"));


