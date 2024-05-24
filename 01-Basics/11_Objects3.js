console.log("Object Destructuring and JSON API")

const course = {
    courseName: "JavaScript ",
    price: "9999",
    courseInstructor: "Ananda"
};



// course.courseName??

const {courseInstructor: instructor} = course


// console.log(courseInstructor)
// console.log(instructor)


// START

// const navBar = ({DestructWay}) => {}

// navBar(DestructWay = "Ananda")

// END

//JSON FORM

// {
//     "name": "ANANDA",
//     "courseName": "JS",
//     "price": "Free"
// }




