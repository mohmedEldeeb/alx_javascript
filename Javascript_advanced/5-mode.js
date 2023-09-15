// 4-math.js
function changeMode(size, wight, transform, background, color) {
    // Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color
    return () => {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = wight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

const main = () => {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green'); 
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // Add a button to the body with the text Spooky
    // Add a button to the body with the text Dark mode
    // Add a button to the body with the text Scream mode
    // set id for buttons
    
    const buttonSpooky = document.createElement('button');
    const buttonDarkMode = document.createElement('button');
    const buttonScreamMode = document.createElement('button');

    buttonSpooky.textContent = 'Spooky';
    buttonDarkMode.textContent = 'Dark mode';
    buttonScreamMode.textContent = 'Scream mode';

    document.body.appendChild(buttonSpooky);
    document.body.appendChild(buttonDarkMode);
    document.body.appendChild(buttonScreamMode);

    buttonSpooky.addEventListener('click', spooky);
    buttonDarkMode.addEventListener('click', darkMode);
    buttonScreamMode.addEventListener('click', screamMode);

    
}
main();