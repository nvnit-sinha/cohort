let keys = document.querySelectorAll(".keys");
let h1 = document.querySelector("h1");
let num = 28;
keys.forEach((elem,index)=>{
    elem.textContent = String.fromCharCode(65+index);
    const soundNum = num;
    elem.addEventListener("click", ()=>{
        let aud = new Audio(`sounds/${soundNum}.mp3`);
        aud.play();
        h1.textContent = "Great!!"
    });
    num++;
});





