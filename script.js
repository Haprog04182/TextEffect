
const TF = document.querySelectorAll(".textEffect");
const maxHeight = 25;
const maxWidth = 50;

TF.forEach((item) => {
    item.addEventListener("mousemove", (e) => { textFree(e, item) } );
})


function textFree(e, item) {
    react = item.getBoundingClientRect();
    
    XPositionCenter =  react.left + (react.width / 2);
    YPositionCenter =  react.top + (react.height / 2);

    x =  (XPositionCenter - e.clientX)/ maxWidth; 
    y =  (YPositionCenter - e.clientY)/ maxHeight; 

    

    const title = item.querySelector(".title");
    title.style.setProperty("--mouse-x",  x   + "px");
    title.style.setProperty("--mouse-y",  y  + "px");
}