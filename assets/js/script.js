const text = ["Java Full-Stack Developer", "MERN Stack Enthusiast", "AI Explorer"];
let index = 0, charIndex = 0;
let typingElement = document.getElementById("typing");

function type() {
    if (charIndex < text[index].length) {
        typingElement.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}
function erase() {
    if (charIndex > 0) {
        typingElement.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(type, 500);
    }
}
document.addEventListener("DOMContentLoaded", type);
