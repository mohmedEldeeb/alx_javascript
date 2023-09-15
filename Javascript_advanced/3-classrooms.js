



function createClassRoom (numbersOfStudents) {
    function studentSeat(seat){
        return () => {
         return seat;   
        };
    }
    students = [];
    for (let i = 1; i <= numbersOfStudents; i++) {
        students.push(studentSeat(i));
    }

    return students;
}
const classRoom = createClassRoom(10);
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
