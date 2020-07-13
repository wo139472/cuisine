var screenWidth = window.screen.width;
    screenWidth = screenWidth>=640?640:screenWidth;
    

var rem = screenWidth/375 * 10
console.log('1rem = 10px',rem);
document.getElementsByTagName("html")[0].style.fontSize = rem + 'px';
document.getElementsByTagName("body")[0].style.fontSize = '0px';