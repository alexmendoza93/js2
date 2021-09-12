const buttons= document.querySelectorAll('button');
const makeNewColor = function () {
   const r = Math.floor(Math.random() * 255) + 1;
   const g = Math.floor(Math.random() * 255) + 1;
   const b = Math.floor(Math.random() * 255) + 1;
   return `rgb(${r},${g},${b})`;
}

for (let button of buttons){
    button.addEventListener('click', function(){
        button.style.backgroundColor=makeNewColor();
        button.style.color=makeNewColor();
        
    })
}

const ps = document.querySelectorAll('p')
for (let p of ps){
    p.addEventListener('click', function(){
        p.style.color=makeNewColor();
    })
}