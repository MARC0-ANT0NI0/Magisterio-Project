const b = document.getElementById("optionNav");
const overlayConst = document.querySelector(".overlay");

document.getElementById("menu-button").addEventListener("click", () =>  {
    overlayConst.style.display = "block";
    b.classList.toggle("translate");
    b.addEventListener("transitionend", e => {
        if (!b.classList.contains("translate")) overlayConst.style.display = "none";
    });
});
