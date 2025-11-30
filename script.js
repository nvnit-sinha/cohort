let main = document.querySelector("main");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let text = document.querySelector("#text");
let h4 = document.querySelector("h4");

let family = ["vinay💛", "chiku😭", "birendra🙈", "kali🌸", "putul😂", "nupur🥳", "rishu💀", "Navneet😎", "Anup🩷", "Nvnit🔥", "mohit🍎", "anshu🌻","Hemanti✨", "Nita👁️", "Poonam😌", "shreya🤩", "richa😇", "anmol🤡", "Navi😈"]

let sundar = ["😍","🤩","🤡","✨","🥳","😇", "🌸", "😌", "🙈", "😈", "🩷","💀","🔥", "🤑","🦹‍♂️","🤌","🫶","😭","🌻","😎","👾","🦋","🐤","🧠","🫂"];


btn1.addEventListener("click", ()=>{

    for(let i = 0;i<219;i++){
    let h1 = document.createElement("h1");

    let y = Math.random() * 95;
    let x = Math.random() * 95;
    let z = Math.random() * 90;
    let scl = Math.random() * 2;
    let i = Math.floor(Math.random()*sundar.length);
    h1.style.position = "absolute";
    h1.textContent = sundar[i];
    h1.style.color = "white";
    h1.style.left = x + "%";
    h1.style.top = y + "%";
    h1.style.rotate = z + "deg";
    h1.style.scale = scl;

    main.append(h1);
    }
    
    btn1.style.display = "none";
    btn2.style.display = "none";
    text.style.display = "none";
    h4.style.display = "none";

})

btn2.addEventListener("click",()=>{
    for(let i = 0;i<99;i++){
        
        let h1 = document.createElement("h1");
        
        let y = Math.random() * 85;
        let x = Math.random() * 84;
        let z = Math.random() * 90;
        let scl = Math.random() * 2;
        let i = Math.floor(Math.random()*family.length);
        h1.style.position = "absolute";
        h1.textContent = family[i];
        h1.style.color = "white";
        h1.style.left = x + "%";
        h1.style.top = y + "%";
        h1.style.rotate = z + "deg";
        h1.style.scale = scl;
        
        main.append(h1);
    }
    btn1.style.display = "none";
    btn2.style.display = "none";
    text.style.display = "none";
    h4.style.display = "none";

}) 