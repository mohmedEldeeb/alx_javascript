

const welcome = (firstName, lastName) => {
    let fullName = firstName + ' ' + lastName;
    const displayFullName = () => {
        alert("Welcome " + fullName + "!");
    }
    return displayFullName();
}