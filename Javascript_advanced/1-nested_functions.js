
const globalVariable = 'Welcome';
const outer = () => {
    alert(globalVariable);
    let course = 'Holberton'
    const inner = () => {
        alert(globalVariable + ' ' + course);
        const exclamation = '!'
        const inception = () => {
            alert(globalVariable + ' ' + course + exclamation);

        }
        inception();
    }
    inner();
}
outer();

