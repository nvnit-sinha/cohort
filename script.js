let inner = document.querySelector("#inner");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let grow = 0;
h1.textContent = grow + '%';

btn.addEventListener("click", ()=>{
    btn.style.pointerEvents = "none";
    let int = setInterval(()=>{
        grow++;
        h1.textContent = grow + '%';
        inner.style.width = grow + '%';
    },50);

    setTimeout(()=>{
        clearInterval(int);
        btn.textContent = "Downloaded";
        btn.style.opacity = 0.5;
    },5000)

    setTimeout(()=>{
        let time = 60+ Math.floor(Math.random()*40);
        h3.textContent = `File downloaded successfully in ${time/10} secs`;
        h3.style.fontWeight = 400;

    },5100)

})

