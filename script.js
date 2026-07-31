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


const x=setInterval(()=>{


p++;

progress.style.width=p+"%";


if(p==99){


clearInterval(x);

typing.innerHTML="تم الاتصال بنجاح";


}


},40);


}


type();
