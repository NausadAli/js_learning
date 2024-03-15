// DeStructuring?


const course = {
    name: "Js Hindi",
    courseInstructure : "Hitesh Choudhary",
    courseFee : 4000,
}

//DeStructuring...

// const {obj_key} = obj_name       ver_1
// const {obj_key : shortName} = obj_name

//////////////////////////////version 1/////////////////////////////
const {courseInstructure} = course;
// console.log(courseInstructure)

///////////////////////Version 2////////////////////////////////

const{courseFee: fee} = course
// console.log(fee)


/*                       In React we use Destructuring

         //props.company
navbar = ({company})=>{

}

*/


// JSON
// {
//     "name":""
// }

// [
//     {},
//     {}
// ]