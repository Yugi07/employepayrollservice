//uc1
const IS_ABSENT = 0
let empcheck = Math.floor(Math.random() * 10) % 2;
if (empcheck == IS_ABSENT) {
    console.log("employee is absent");
    return;
} else {
    console.log("employe is present")
    
}
//uc2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let emphrs = 0;
empcheck = Math.floor(Math.random() * 10) % 3;
switch(empcheck) {
    case IS_PART_TIME;
    emphrs = PART_TIME;
    break;
    case IS_FULL_TIME ;
    emphrs = FULL_TIME ;
    break;
    default;
     emphrs = 0;
}
let empwage = emphrs + WAGE_PER_HOUR;
console.log("Emp Wage");

//uc3
function getworkhours(empcheck) {
    switch(empcheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
    default:
        return 0;
    }
}
let emphrs= 0;
let empcheck = Math.floor(Math.random()* 10) % 3;
emphrs = getworkhours(empcheck);
let empwage = emphrs * WAGE_PER_HOUR;
console.log("empwage:" + empwage);
