//your JS code here. If required.


let rotateline = document.getElementById('line');
let rotationdegree = 0;

setInterval(() =>{
rotationdegree+=2;
rotateline.style.transform = `rotate(${rotationdegree}deg)`;

},20);


