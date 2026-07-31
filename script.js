const text=[

"جاري الاتصال بالخادم...",

"جاري التحقق من الهوية...",

"البحث عن بيانات الطالبة...",

"تحميل النتيجة..."

];


let i=0;
let j=0;


const typing=document.getElementById("typing");
const progress=document.querySelector(".progress");


function type(){

if(i<text.length){

if(j<text[i].length){

typing.innerHTML+=text[i].charAt(j);

j++;

setTimeout(type,60);

}

else{

setTimeout(()=>{

typing.innerHTML="";

i++;

j=0;

type();

},900);

}

}

else{

load();

}

}



function load(){

let p=0;


let x=setInterval(()=>{


p++;

progress.style.width=p+"%";


if(p==99){

clearInterval(x);


typing.innerHTML="تم الاتصال بنجاح";


setTimeout(()=>{


document.getElementById("box").classList.add("shake");


setTimeout(()=>{


document.querySelector(".loader").style.display="none";

typing.style.display="none";

document.getElementById("surprise").style.display="block";


startMessage();


},700);


},1500);


}


},40);


}



function startMessage(){


let text2="عائشة ❤️ كان لازم تعرفي إنك شخص مميز جداً، والنتيجة الحقيقية هي الابتسامة التي ترسمينها حولك 🌸";


let k=0;

let msg=document.getElementById("message");


let timer=setInterval(()=>{


msg.innerHTML+=text2.charAt(k);

k++;


if(k>=text2.length){

clearInterval(timer);

}


},70);


}



type();
