const canvas=document.getElementById("heart");

const ctx=canvas.getContext("2d");


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


let petals=[];


for(let i=0;i<40;i++){

petals.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*10+5,

speed:Math.random()*2+1

});

}



function animate(){


ctx.clearRect(0,0,canvas.width,canvas.height);


let pulse=1+0.05*Math.sin(Date.now()/200);


ctx.font="20px Arial";

ctx.fillStyle="#ff66cc";

ctx.shadowColor="pink";

ctx.shadowBlur=30;



let text="LYUBIMYY ❤️";


for(let t=0;t<Math.PI*2;t+=0.03){


let x=16*Math.pow(Math.sin(t),3);


let y=

13*Math.cos(t)
-5*Math.cos(2*t)
-2*Math.cos(3*t)
-Math.cos(4*t);



ctx.fillText(

text,

canvas.width/2+x*18*pulse,

canvas.height/2-y*18*pulse

);

}



// petals

ctx.shadowBlur=0;

ctx.fillStyle="#ff99dd";


petals.forEach(p=>{


ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);

ctx.fill();


p.y+=p.speed;


if(p.y>canvas.height){

p.y=0;

p.x=Math.random()*canvas.width;

}

});


requestAnimationFrame(animate);

}


animate();




// message

let message=

"Hyee Biee...\n\nCan I call you mine?\n\nI love you ❤️\n\n— Your love, Daxha";


let i=0;


function typing(){


if(i<message.length){

document.getElementById("typing").innerHTML+=message[i];

i++;

setTimeout(typing,100);

}

}


setTimeout(typing,5000);